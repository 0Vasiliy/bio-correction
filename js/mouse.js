  //Анимация мышки

const container = document.querySelector(".button");
const ball = document.querySelector(".button_scroll");

let position = 0;
let velocity = 3;

function updatePosition() {
  position += velocity;
  ball.style.top = position + "px";

  const containerHeight = container.clientHeight;
  const ballHeight = ball.clientHeight;
  if (position <= 0 || position >= containerHeight - ballHeight) {
   
    velocity = -velocity;
  }

  setTimeout(updatePosition, 100);
}

updatePosition();

//Анимация мышки2

const container1 = document.querySelector(".button1");
const ball1 = document.querySelector(".button_scroll1");

let position1 = 0;
let velocity1 = 3;

function updatePosition1() {
  position1 += velocity1;
  ball1.style.top = position1 + "px";

  const container1Height = container1.clientHeight;
  const ball1Height = ball1.clientHeight;
  if (position1 <= 0 || position1 >= container1Height - ball1Height) {
   
    velocity1 = -velocity1;
  }

  setTimeout(updatePosition1, 100);
}

updatePosition1();

//Анимация мышки3

const container2 = document.querySelector(".button2");
const ball2 = document.querySelector(".button_scroll2");

let position2 = 0;
let velocity2 = 3;

function updatePosition2() {
  position2 += velocity2;
  ball2.style.top = position2 + "px";

  const container2Height = container2.clientHeight;
  const ball2Height = ball2.clientHeight;
  if (position2 <= 0 || position2 >= container2Height - ball2Height) {
   
    velocity2 = -velocity2;
  }

  setTimeout(updatePosition2, 100);
}

updatePosition2();

//Анимация мышки4

const container3 = document.querySelector(".button3");
const ball3 = document.querySelector(".button_scroll3");

let position3 = 0;
let velocity3 = 3;

function updatePosition3() {
  position3 += velocity3;
  ball3.style.top = position3 + "px";

  const container3Height = container3.clientHeight;
  const ball3Height = ball3.clientHeight;
  if (position3 <= 0 || position3 >= container3Height - ball3Height) {
   
    velocity3 = -velocity3;
  }

  setTimeout(updatePosition3, 100);
}

updatePosition3();

