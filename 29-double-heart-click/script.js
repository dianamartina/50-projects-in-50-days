const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

//mai usor cu dblclick
// loveMe.addEventListener("dblclick", (e) => {
//   console.log(123);
// });

//creem noi dblclick
loveMe.addEventListener("click", (e) => {
  //   console.log(123);
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHear(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHear = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  //   console.log(xInside, yInside);
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  //indepartam inimile dupa
  setTimeout(() => heart.remove(), 1000);
};
