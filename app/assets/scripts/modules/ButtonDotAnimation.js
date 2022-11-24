const btns = document.querySelectorAll(".btn--dot-animation");

const randomColorRGB = () => {
  return `rgb(${Math.floor(Math.random() * 100) + 155}, ${
    Math.floor(Math.random() * 100) + 155
  }, ${Math.floor(Math.random() * 255)})`;
};

const animateBtn = e => {
  const clickCordX = e.pageX;
  const clickCordY = e.pageY;

  const btnCordX = e.target.offsetLeft;
  const btnCordY = e.target.offsetTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");

  circle.style.left = clickCordX - btnCordX + "px";
  circle.style.top = clickCordY - btnCordY + "px";
  circle.style.backgroundColor = randomColorRGB();

  e.target.appendChild(circle);

  //   console.log(
  //     clickCordX,
  //     btnCordX,
  //     circle.style.left,
  //     clickCordY,
  //     btnCordY,
  //     circle.style.top
  //   );
  setTimeout(() => {
    circle.remove();
  }, 500);
};

btns.forEach(btn => btn.addEventListener("click", animateBtn));
