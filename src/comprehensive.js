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


function fixComprehensiveCounts() {
    const card = document.querySelector(".unit-card.comprehensive");
    if (!card) return;
    const total = card.querySelector(".unit-main span");
    if (total) total.textContent = "160 " + String.fromCharCode(39064);
    const counts = ["52", "50", "58"];
    card.querySelectorAll(".unit-types em").forEach((item, index) => {
          if (counts[index]) item.textContent = counts[index];
    });
}

fixComprehensiveCounts();
new MutationObserver(fixComprehensiveCounts).observe(document.body, {
    childList: true,
    subtree: true
});
