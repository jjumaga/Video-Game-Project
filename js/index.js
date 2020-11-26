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
  } else {
    wrongAnswer();
  }
}

let correctSound = document.querySelector("#first-button .groovy-voice");
let headerContent = document.querySelector("#welcome .headers");
let bodyClasses = document.getElementById("body-page");
let backgroundPic = document.getElementById("game-box-2");

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
    let nblife = document.querySelectorAll(".life").length;
    if (nblife === 0) {
      setInterval(() => (loserPopup.style.display = "inline"), 500);
    }
  });
  //you won
  //changes css
}

/*var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");*/

let wrongSound = document.querySelector("#second-button .error");
let lives = document.querySelector(".lives");
console.log(typeof lives);
let loserPopup = document.querySelector(".loser-message");
let lifeVinyls = document.querySelectorAll(".life");

function wrongAnswer() {
  wrongSound.src = answers[currentSlide].incorrectSound;
  wrongSound.play();
  lives.removeChild(lives.lastElementChild);
  let nblife = document.querySelectorAll(".life").length;
  if (nblife === 0) {
    setInterval(() => (loserPopup.style.display = "inline"), 500);
  }
  //if (lives.contains(lifeVinyls) === false);
}

var audio = new Audio(
  "./Video-Game-Project/far-out-traveller/mp3-files/careless-whispers.mp3"
);
audio.play();

//As a result, we can simply access that image using
//the getElementById() method and then change the display value to
//“none”. By setting the display value to “none”, we are
//essentially hiding the image from view.

//let currentSound = answer[currentSlide].sound //i need to call this when my slide changes
//buttonOne.textContent = answerPool[currentSlide];

// when done ..
// currentAnswerIndex++

// plan all the steps as functions
// playsound
// listenClicks
// check
// display question(index)
// remove life

//default is fifties
//play button - onclick plays mp3
//if inner.html = 'play', innerhtml = replay
//listenclicks to options
//how does computer know what button has been clicked
//if clicked button.index == 0, launch correct button function
//else launch incorrect button function

//correct button function
//plays mp3 "groovy" and "careless whisper" at the same time?
