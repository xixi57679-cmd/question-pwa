const typeNames = {
  all: "全部题型",
  fill: "填空",
  choice: "选择",
  judge: "判断"
};

function findTypeButton(type) {
  return document.querySelector(`.type-tabs button[data-type-filter="${type}"]`);
}

function getCount(type) {
  const button = findTypeButton(type);
  return button ? button.querySelector("em")?.textContent?.trim() || "0" : "0";
}

function selectAllChapters() {
  const chapter = document.querySelector('select[data-action="chapter"]');
  if (!chapter) return;
  chapter.value = "全部";
  chapter.dispatchEvent(new Event("change", { bubbles: true }));
}

function selectType(type) {
  const button = findTypeButton(type);
  if (button) button.click();
}

function ensureComprehensiveCard() {
  const list = document.querySelector(".unit-list");
  if (!list || list.querySelector(".unit-card.comprehensive")) return;

  const card = document.createElement("article");
  card.className = "unit-card comprehensive";
  card.innerHTML = `
    <button class="unit-main" data-comprehensive-type="all">
      <strong>五章综合练习</strong>
      <span>${getCount("all")} 题</span>
    </button>
    <div class="unit-types">
      ${["fill", "choice", "judge"]
        .map(
          (type) => `
            <button data-comprehensive-type="${type}">
              <span>${typeNames[type]}</span><em>${getCount(type)}</em>
            </button>
          `
        )
        .join("")}
    </div>
  `;
  card.addEventListener("click", (event) => {
    const button = event.target.closest("[data-comprehensive-type]");
    if (!button) return;
    const type = button.dataset.comprehensiveType;
    selectAllChapters();
    setTimeout(() => selectType(type), 0);
  });
  list.prepend(card);
}

ensureComprehensiveCard();
new MutationObserver(ensureComprehensiveCard).observe(document.body, {
  childList: true,
  subtree: true
});

const practiceRulesStorageKey = "question-pwa-state-v1";
const practiceRulesFinished = "恭喜你完成此次练习";

function readPracticeRulesState() {
  try {
    return JSON.parse(localStorage.getItem(practiceRulesStorageKey) || "{}");
  } catch {
    return {};
  }
}

function writePracticeRulesState(patch) {
  localStorage.setItem(practiceRulesStorageKey, JSON.stringify({ ...readPracticeRulesState(), ...patch }));
}

function currentPracticePosition() {
  const pill = document.querySelector(".question-meta span");
  const match = pill?.textContent?.trim().match(/^(\d+)\/(\d+)$/);
  if (!match) return null;
  return { current: Number(match[1]), total: Number(match[2]) };
}

function currentQuestionId() {
  return document.querySelector(".question-meta span:nth-child(3)")?.textContent?.trim() || "";
}

function isRandomMode() {
  return readPracticeRulesState().activeMode === "random";
}

function randomSeenKey() {
  const saved = readPracticeRulesState();
  return ["practice-rules-seen", saved.activeChapter || "全部", saved.activeType || "all", saved.query || ""].join(":");
}

function readRandomSeen() {
  try {
    return JSON.parse(sessionStorage.getItem(randomSeenKey()) || "[]");
  } catch {
    return [];
  }
}

function writeRandomSeen(ids) {
  sessionStorage.setItem(randomSeenKey(), JSON.stringify([...new Set(ids)]));
}

function returnInitialScreen() {
  writePracticeRulesState({
    activeChapter: "全部",
    activeType: "all",
    activeMode: "all",
    currentIndex: 0
  });
  location.href = location.pathname + "?v=practice-rules-" + Date.now();
}

function finishPracticeRound() {
  alert(practiceRulesFinished);
  returnInitialScreen();
}

function selectedAnswerText() {
  const selected = document.querySelector("[data-answer].selected");
  if (selected) return selected.dataset.answer || selected.textContent.trim();
  return [...document.querySelectorAll("[data-fill]")]
    .map((input) => input.value.trim())
    .filter(Boolean)
    .join("|");
}

function clearWrongRecord(questionId) {
  const saved = readPracticeRulesState();
  const records = saved.records || {};
  if (!records[questionId]) return;
  records[questionId].wrong = 0;
  localStorage.setItem(practiceRulesStorageKey, JSON.stringify({ ...saved, records }));
}

function markRandomCurrentQuestion() {
  if (!isRandomMode()) return;
  const position = currentPracticePosition();
  const id = currentQuestionId();
  if (!position || !id) return;
  const seen = readRandomSeen();
  if (!seen.includes(id)) {
    seen.push(id);
    writeRandomSeen(seen);
  }
  const progress = document.querySelector(".question-meta span");
  if (progress) progress.textContent = `${Math.min(seen.length, position.total)}/${position.total}`;
}

function skipRandomDuplicate(attempt = 0) {
  if (!isRandomMode()) return;
  const position = currentPracticePosition();
  const id = currentQuestionId();
  if (!position || !id) return;
  const seen = readRandomSeen();
  if (seen.length >= position.total) return;
  if (!seen.includes(id)) {
    markRandomCurrentQuestion();
    return;
  }
  if (attempt >= position.total * 3) return;
  const nextButton = document.querySelector("button.ghost[data-action='next']");
  if (!nextButton) return;
  nextButton.click();
  setTimeout(() => skipRandomDuplicate(attempt + 1), 80);
}

function guardPracticeEdges(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const position = currentPracticePosition();
  if (!position) return;
  const seen = readRandomSeen();
  const randomFinished = isRandomMode() && seen.length >= position.total;

  if (button.dataset.action === "next" && (position.current >= position.total || randomFinished)) {
    event.preventDefault();
    event.stopImmediatePropagation();
    alert("已经是最后一题");
    return;
  }

  if (button.dataset.action === "prev" && position.current <= 1) {
    event.preventDefault();
    event.stopImmediatePropagation();
    alert("已经是第一题");
  }
}

function handlePracticeSubmit(event) {
  const button = event.target.closest("button[data-action='check']");
  if (!button) return;
  const id = currentQuestionId();
  const answerBeforeSubmit = selectedAnswerText();
  const positionBeforeSubmit = currentPracticePosition();
  const seenBeforeSubmit = readRandomSeen();
  setTimeout(() => {
    const correct = !!document.querySelector(".result.correct");
    if (correct && id) {
      clearWrongRecord(id);
      if (readPracticeRulesState().activeMode === "wrong") location.reload();
    }
    const isFinal =
      positionBeforeSubmit &&
      (positionBeforeSubmit.current >= positionBeforeSubmit.total ||
        (isRandomMode() && seenBeforeSubmit.length >= positionBeforeSubmit.total));
    if (answerBeforeSubmit && isFinal) finishPracticeRound();
  }, 120);
}

function handleRandomNext(event) {
  const button = event.target.closest("button[data-action='next']");
  if (!button || !isRandomMode()) return;
  setTimeout(() => skipRandomDuplicate(), 120);
}

document.addEventListener("click", guardPracticeEdges, true);
document.addEventListener("click", handlePracticeSubmit);
document.addEventListener("click", handleRandomNext);
new MutationObserver(markRandomCurrentQuestion).observe(document.body, {
  childList: true,
  subtree: true
});
markRandomCurrentQuestion();
