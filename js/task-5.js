function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const сlickBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const сhangeBody = document.querySelector('body')

сlickBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  сhangeBody.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});