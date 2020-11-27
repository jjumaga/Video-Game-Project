import { answers } from "../questions.js";

let currentSlide = 0;

let answerPool = document.querySelectorAll(".choice-buttons .btn");
//choose all buttons from html and put it into an array
answerPool.forEach((btn, index) => {
  /*First placeholder is the element, 2nd is the index (position)*/
  btn.innerHTML = answers[currentSlide].options[index];
  /*innerHTML of 3 option btns = answers(array of objects),
  currentSlide(the index of the current slide inside answers),
  .options (to access the key options inside the object), 
  index (the index of the array of strings attached to the object options*/
  btn.onclick = handleAnswer;
});

let btnPlayReplay = document.querySelector(".play-replay");
btnPlayReplay.onclick = playIsClicked;

let songs = document.getElementById("songbites");
function playIsClicked() {
  if (btnPlayReplay.innerHTML === "Play") {
    btnPlayReplay.innerHTML = "Replay";
  }
  songs.src = answers[currentSlide].song;
  songs.play();
  //audio.volume
}

/*const answerBtns = document.querySelectorAll(".choice-buttons .btn");
  answerBtns.forEach((btn) => {
    btn.onclick = handleAnswer;
  };*/

function handleAnswer(evt) {
  const whichButton = Number(evt.target.getAttribute("data-answer"));
  if (whichButton === answers[currentSlide].correctAnswer) {
    correctAnswer();
    /*} else if (
    currentSlide === 4 &&
    whichButton === answers[currentSlide].correctAnswer
  ) {
    setInterval(() => (winnerPopup.style.opacity = "1"), 500);*/
  } else {
    wrongAnswer();
  }
}

let correctSound = document.querySelector("#first-button .groovy-voice");
let headerContent = document.querySelector("#welcome .headers");
let bodyClasses = document.getElementById("body-page");
let backgroundPic = document.getElementById("game-box-2");
let winnerPopup = document.querySelector(".winner-message");

function correctAnswer() {
  correctSound.src = answers[currentSlide].groovySound;
  correctSound.play();
  btnPlayReplay.innerHTML = "Play";
  currentSlide++;
  headerContent.innerHTML = answers[currentSlide].header;
  songs.src = answers[currentSlide].song;
  bodyClasses.classList.remove(answers[currentSlide - 1].bodyClass);
  bodyClasses.classList.add(answers[currentSlide].bodyClass);
  backgroundPic.classList.remove(answers[currentSlide - 1].backgroundClass);
  backgroundPic.classList.add(answers[currentSlide].backgroundClass);
  answerPool.forEach((btn, index) => {
    btn.innerHTML = answers[currentSlide].options[index];
    if (currentSlide === 5) {
      setInterval(() => (winnerPopup.style.display = "flex"), 500);
    }
  });
}

let wrongSound = document.querySelector("#second-button .error");
let lives = document.querySelector(".lives");
console.log(typeof lives);
let loserPopup = document.querySelector(".loser-message");

function wrongAnswer() {
  wrongSound.src = answers[currentSlide].incorrectSound;
  wrongSound.play();
  lives.removeChild(lives.lastElementChild);
  let nblife = document.querySelectorAll(".life").length;
  if (nblife === 0) {
    setInterval(() => (loserPopup.style.display = "flex"), 500);
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const backgroundMus = document.getElementById("background-music");
  backgroundMus.volume = 0.1;
  backgroundMus.play();
});
