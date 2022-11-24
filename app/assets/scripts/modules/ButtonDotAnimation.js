const btns = document.querySelectorAll(".btn--dot-animation");

const randomColorRGB = () => {
  return `rgb(${Math.floor(Math.random() * 100) + 155}, ${
    Math.floor(Math.random() * 100) + 155
  }, ${Math.floor(Math.random() * 255)})`;
};

const animateBtn = e => {
  const clickCordX = e.clientX;
  const clickCordY = e.clientY;

  const btnCordX = e.target.offsetLeft;
  const btnCordY = e.target.offsetTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");

  circle.style.left = clickCordX - btnCordX + "px";
  circle.style.top = clickCordY - btnCordY + "px";
  circle.style.backgroundColor = randomColorRGB();

  e.target.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 500);
};

btns.forEach(btn => btn.addEventListener("click", animateBtn));
