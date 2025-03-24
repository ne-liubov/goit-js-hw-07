const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const trimmValue = inputEl.value.trim();

  if (trimmValue === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = trimmValue;
  }
});