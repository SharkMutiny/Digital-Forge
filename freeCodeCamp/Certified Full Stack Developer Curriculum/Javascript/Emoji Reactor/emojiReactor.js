const happyBtn = document.querySelector("#happy-btn");

happyBtn.addEventListener("click", () => {
  const countEl = document.querySelector(".count");
  const countText = countEl.textContent;
  const currCount = Number(countText.split("/")[0]);
  console.log("Current count:", currCount);
  if (currCount < 10) {
    const newCount = currCount + 1;
    countEl.textContent = `${newCount}/10`;
  }
})
