const app = document.querySelector("#app");
const storageKey = "question-pwa-state-v1";

const state = {
  questions: [],
  chapters: [],
  activeChapter: "全部",
  activeMode: "all",
  currentIndex: 0,
  checked: false,
  result: null,
  fillValues: [],
  selectedAnswer: "",
  records: {},
  query: "",
  showSheet: false
};

const modeLabels = {
  all: "全部",
  random: "随机",
  wrong: "错题",
  favorite: "收藏"
};

function loadStoredState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    state.records = saved.records || {};
    state.activeChapter = saved.activeChapter || "全部";
    state.activeMode = saved.activeMode || "all";
    state.currentIndex = saved.currentIndex || 0;
  } catch {
    state.records = {};
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      records: state.records,
      activeChapter: state.activeChapter,
      activeMode: state.activeMode,
      currentIndex: state.currentIndex
    })
  );
}

async function loadQuestions() {
  const response = await fetch(new URL("data/questions.ts", import.meta.url), { cache: "no-cache" });
  if (!response.ok) throw new Error("题库加载失败");
  const source = await response.text();
  const runnable = source
    .replace(/export\s+type\s+QuestionType\s*=\s*[\s\S]*?;\s*/g, "")
    .replace(/export\s+type\s+Question\s*=\s*[\s\S]*?;\s*/g, "")
    .replace(/export\s+interface\s+\w+\s*\{[\s\S]*?\n\}\s*/g, "")
    .replace(/export\s+const\s+chapters\s*=/, "const chapters =")
    .replace(/export\s+const\s+questions\s*:\s*Question\[\]\s*=/, "const questions =")
    .replace(/export\s+default\s+questions\s*;?\s*$/g, "")
    .replace(/\s+as\s+const\s*;/g, ";");

  return Function(`${runnable}\nreturn { chapters, questions };`)();
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[，。；：！？、（）【】《》“”‘’]/g, "");
}

function getQuestionRecord(id) {
  if (!state.records[id]) {
    state.records[id] = {
      correct: 0,
      wrong: 0,
      answered: 0,
      favorite: false,
      lastResult: null
    };
  }
  return state.records[id];
}

function filteredQuestions() {
  let list = state.questions;
  if (state.activeChapter !== "全部") {
    list = list.filter((item) => item.chapter === state.activeChapter);
  }
  if (state.activeMode === "wrong") {
    list = list.filter((item) => getQuestionRecord(item.id).wrong > 0);
  }
  if (state.activeMode === "favorite") {
    list = list.filter((item) => getQuestionRecord(item.id).favorite);
  }
  if (state.query.trim()) {
    const query = normalizeText(state.query);
    list = list.filter((item) => normalizeText(item.question).includes(query));
  }
  return list;
}

function visibleQuestion() {
  const list = filteredQuestions();
  if (!list.length) return null;
  state.currentIndex = Math.max(0, Math.min(state.currentIndex, list.length - 1));
  return list[state.currentIndex];
}

function overallStats() {
  const total = state.questions.length;
  const answered = state.questions.filter((item) => getQuestionRecord(item.id).answered > 0).length;
  const wrong = state.questions.filter((item) => getQuestionRecord(item.id).wrong > 0).length;
  const favorite = state.questions.filter((item) => getQuestionRecord(item.id).favorite).length;
  return { total, answered, wrong, favorite, percent: total ? Math.round((answered / total) * 100) : 0 };
}

function typeName(type) {
  return { fill: "填空", choice: "选择", judge: "判断" }[type] || type;
}

function resetAnswer() {
  state.checked = false;
  state.result = null;
  state.fillValues = [];
  state.selectedAnswer = "";
}

function switchMode(mode) {
  state.activeMode = mode;
  state.currentIndex = 0;
  if (mode === "random") shuffleCurrentList();
  resetAnswer();
  saveState();
  render();
}

function shuffleCurrentList() {
  const pool = filteredQuestions();
  if (!pool.length) return;
  const next = pool[Math.floor(Math.random() * pool.length)];
  state.currentIndex = filteredQuestions().findIndex((item) => item.id === next.id);
}

function answerChoices(question) {
  if (question.type === "judge") return ["正确", "错误"];
  if (question.type === "choice") {
    return question.options.map((option, index) => ({
      key: String.fromCharCode(65 + index),
      text: option
    }));
  }
  return [];
}

function isFillCorrect(question) {
  return question.answer.every((answer, index) => {
    const user = normalizeText(state.fillValues[index]);
    const accepted = [answer, ...((question.acceptedAnswers && question.acceptedAnswers[index]) || [])];
    return accepted.some((item) => normalizeText(item) === user);
  });
}

function isCurrentCorrect(question) {
  if (question.type === "fill") return isFillCorrect(question);
  return normalizeText(state.selectedAnswer) === normalizeText(question.answer);
}

function checkAnswer() {
  const question = visibleQuestion();
  if (!question) return;
  if (question.type === "fill" && !state.fillValues.some((value) => value && value.trim())) return;
  if (question.type !== "fill" && !state.selectedAnswer) return;
  const correct = isCurrentCorrect(question);
  const record = getQuestionRecord(question.id);
  record.answered += 1;
  record.lastResult = correct ? "correct" : "wrong";
  if (correct) record.correct += 1;
  else record.wrong += 1;
  state.checked = true;
  state.result = correct ? "correct" : "wrong";
  saveState();
  render();
}

function nextQuestion(step = 1) {
  const list = filteredQuestions();
  if (!list.length) return;
  if (state.activeMode === "random") {
    state.currentIndex = Math.floor(Math.random() * list.length);
  } else {
    state.currentIndex = (state.currentIndex + step + list.length) % list.length;
  }
  resetAnswer();
  saveState();
  render();
}

function toggleFavorite(id) {
  const record = getQuestionRecord(id);
  record.favorite = !record.favorite;
  saveState();
  render();
}

function clearProgress() {
  const ok = confirm("清空本机做题记录？题库文件不会受影响。");
  if (!ok) return;
  state.records = {};
  state.currentIndex = 0;
  resetAnswer();
  saveState();
  render();
}

function cls(...items) {
  return items.filter(Boolean).join(" ");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderTop(stats) {
  return `
    <header class="top">
      <div>
        <p class="eyebrow">汽车总线技术</p>
        <h1>刷题系统</h1>
      </div>
      <button class="icon-btn" data-action="toggle-sheet" aria-label="更多">
        <span></span><span></span><span></span>
      </button>
    </header>
    <section class="progress-band">
      <div class="ring" style="--progress:${stats.percent * 3.6}deg">
        <strong>${stats.percent}%</strong>
      </div>
      <div class="stat-grid">
        <div><strong>${stats.answered}</strong><span>已做</span></div>
        <div><strong>${stats.wrong}</strong><span>错题</span></div>
        <div><strong>${stats.favorite}</strong><span>收藏</span></div>
        <div><strong>${stats.total}</strong><span>题量</span></div>
      </div>
    </section>
  `;
}

function renderFilters() {
  return `
    <section class="filters">
      <div class="segmented">
        ${Object.entries(modeLabels)
          .map(
            ([mode, label]) =>
              `<button class="${state.activeMode === mode ? "active" : ""}" data-mode="${mode}">${label}</button>`
          )
          .join("")}
      </div>
      <div class="select-row">
        <select data-action="chapter" aria-label="章节">
          ${["全部", ...state.chapters]
            .map(
              (chapter) =>
                `<option value="${escapeHtml(chapter)}" ${chapter === state.activeChapter ? "selected" : ""}>${escapeHtml(chapter)}</option>`
            )
            .join("")}
        </select>
        <input data-action="search" value="${escapeHtml(state.query)}" placeholder="搜索题干" />
      </div>
    </section>
  `;
}

function renderQuestion(question, list) {
  if (!question) {
    return `
      <main class="empty">
        <h2>这里暂时没有题目</h2>
        <p>换个章节或模式试试。</p>
      </main>
    `;
  }

  const record = getQuestionRecord(question.id);
  return `
    <main class="question-panel">
      <div class="question-meta">
        <span>${state.currentIndex + 1}/${list.length}</span>
        <span>${typeName(question.type)}</span>
        <span>${escapeHtml(question.id)}</span>
      </div>
      <div class="chapter-name">${escapeHtml(question.chapter)}</div>
      <h2>${escapeHtml(question.question)}</h2>
      ${renderAnswerArea(question)}
      ${renderResult(question)}
      <div class="actions">
        <button class="ghost" data-action="prev">上题</button>
        <button class="primary" data-action="${state.checked ? "next" : "check"}">${state.checked ? "下题" : "交卷"}</button>
        <button class="ghost" data-action="next">下题</button>
      </div>
      <div class="sub-actions">
        <button data-action="favorite" data-id="${question.id}" class="${record.favorite ? "marked" : ""}">
          ${record.favorite ? "已收藏" : "收藏"}
        </button>
        <span>正确 ${record.correct} · 错误 ${record.wrong}</span>
      </div>
    </main>
  `;
}

function renderAnswerArea(question) {
  if (question.type === "fill") {
    return `
      <div class="fill-list">
        ${question.answer
          .map(
            (_, index) =>
              `<label>
                <span>空 ${index + 1}</span>
                <input data-fill="${index}" value="${escapeHtml(state.fillValues[index] || "")}" ${state.checked ? "disabled" : ""} />
              </label>`
          )
          .join("")}
      </div>
    `;
  }

  if (question.type === "judge") {
    return `
      <div class="option-list two">
        ${answerChoices(question)
          .map(
            (answer) =>
              `<button class="${cls(state.selectedAnswer === answer && "selected", state.checked && normalizeText(question.answer) === normalizeText(answer) && "right", state.checked && state.selectedAnswer === answer && state.result === "wrong" && "bad")}" data-answer="${escapeHtml(answer)}">${answer}</button>`
          )
          .join("")}
      </div>
    `;
  }

  return `
    <div class="option-list">
      ${answerChoices(question)
        .map(
          (option) =>
            `<button class="${cls(state.selectedAnswer === option.key && "selected", state.checked && question.answer === option.key && "right", state.checked && state.selectedAnswer === option.key && state.result === "wrong" && "bad")}" data-answer="${option.key}">
              <b>${option.key}</b>
              <span>${escapeHtml(option.text)}</span>
            </button>`
        )
        .join("")}
    </div>
  `;
}

function renderResult(question) {
  if (!state.checked) return "";
  const answer = Array.isArray(question.answer) ? question.answer.join("；") : question.answer;
  return `
    <section class="${state.result === "correct" ? "result correct" : "result wrong"}">
      <strong>${state.result === "correct" ? "回答正确" : "回答错误"}</strong>
      <p>答案：${escapeHtml(answer)}</p>
      ${question.explanation ? `<p>${escapeHtml(question.explanation)}</p>` : ""}
    </section>
  `;
}

function renderSheet() {
  if (!state.showSheet) return "";
  return `
    <div class="sheet-backdrop" data-action="toggle-sheet"></div>
    <aside class="sheet">
      <div class="sheet-handle"></div>
      <button data-action="install" class="wide">安装到桌面</button>
      <button data-action="clear" class="wide danger">清空记录</button>
      <button data-action="toggle-sheet" class="wide">关闭</button>
    </aside>
  `;
}

function render() {
  const list = filteredQuestions();
  const question = visibleQuestion();
  const stats = overallStats();
  app.innerHTML = `
    <div class="shell">
      ${renderTop(stats)}
      ${renderFilters()}
      ${renderQuestion(question, list)}
      ${renderSheet()}
    </div>
  `;
}

let installPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
});

app.addEventListener("click", async (event) => {
  const target = event.target.closest("button, [data-action]");
  if (!target) return;
  const mode = target.dataset.mode;
  const action = target.dataset.action;
  const answer = target.dataset.answer;

  if (mode) switchMode(mode);
  if (answer && !state.checked) {
    state.selectedAnswer = answer;
    render();
  }
  if (action === "check") checkAnswer();
  if (action === "next") nextQuestion(1);
  if (action === "prev") nextQuestion(-1);
  if (action === "favorite") toggleFavorite(target.dataset.id);
  if (action === "toggle-sheet") {
    state.showSheet = !state.showSheet;
    render();
  }
  if (action === "clear") clearProgress();
  if (action === "install" && installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
  }
});

app.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.fill !== undefined) {
    state.fillValues[Number(target.dataset.fill)] = target.value;
  }
  if (target.dataset.action === "search") {
    state.query = target.value;
    state.currentIndex = 0;
    resetAnswer();
    render();
  }
});

app.addEventListener("change", (event) => {
  const target = event.target;
  if (target.dataset.action === "chapter") {
    state.activeChapter = target.value;
    state.currentIndex = 0;
    resetAnswer();
    saveState();
    render();
  }
});

async function boot() {
  loadStoredState();
  const data = await loadQuestions();
  state.chapters = data.chapters;
  state.questions = data.questions;
  render();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register(new URL("../sw.js", import.meta.url));
}

boot().catch((error) => {
  app.innerHTML = `<main class="empty"><h2>题库加载失败</h2><p>${escapeHtml(error.message)}</p></main>`;
});
