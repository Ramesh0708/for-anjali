const candles = Array.from(document.querySelectorAll(".candle"));
const wish = document.getElementById("wish");
const hint = document.getElementById("hint");

function litCount() {
  return candles.filter((candle) => candle.classList.contains("is-lit")).length;
}

candles.forEach((candle, index) => {
  const name = ["first", "second", "third"][index];
  candle.addEventListener("click", () => {
    const lit = candle.classList.toggle("is-lit");
    candle.setAttribute("aria-pressed", lit ? "true" : "false");
    candle.setAttribute(
      "aria-label",
      lit ? `Put out the ${name} candle` : `Light the ${name} candle`
    );

    const count = litCount();
    if (count === candles.length) {
      wish.hidden = false;
      hint.textContent = "There. That’s enough.";
    } else {
      wish.hidden = true;
      hint.textContent =
        count === 0 ? "Tap each candle." : `${count} of ${candles.length}. Keep going.`;
    }
  });
});
