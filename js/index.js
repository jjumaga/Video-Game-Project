import { answers } from "../questions.js";

let currentSlide = 1;

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
function playIsClicked(evt) {
  if (btnPlayReplay.innerHTML === "Play") {
    btnPlayReplay.innerHTML = "Replay";
  }
  songs.src = answers[currentSlide].song;
  songs.play();
  //audio.volume
}

/*const answerBtns = document.querySelectorAll(".choice-buttons .btn");
  answerBtns.forEach((btn) => ());*/

function handleAnswer(evt) {
  const whichButton = Number(evt.target.getAttribute("data-answer"));
  if (whichButton === answers[currentSlide].correctAnswer) {
    correctAnswer();
    currentSlide++;
  } else {
    wrongAnswer();
  }
}

//const endOfGame = prompt("You won!");
let correctSound = document.querySelector("#first-button .groovy-voice");
let headerContent = document.querySelector("#welcome .headers");
function correctAnswer() {
  correctSound.src = answers[currentSlide].groovySound;
  correctSound.play();
  btnPlayReplay.innerHTML = "Play";
  headerContent.innerHTML = answers[currentSlide].header;
  answerPool.innerHTML = answers[currentSlide].options;
  console.log(answerPool.innerHTML);
  //endOfGame;
  //changes css
  //change .header-2 h1
}

let wrongSound = document.querySelector("#second-button .error");
let lifeOne = document.querySelector(".life-1");
let lifeTwo = document.querySelector("life-2");
let lifeThree = document.querySelector("life-3");

function wrongAnswer() {
  wrongSound.src = answers[currentSlide].incorrectSound;
  wrongSound.play();
  /*lifeOne.remove();
if (!lifeOne) {
    lifeTwo.remove();
} else (!lifeOne && !lifeTwo) {
    lifeThree.remove();
}*/
  //takes away one life
  //
}
currentSlide++;

//As a result, we can simply access that image using
//the getElementById() method and then change the display value to
//“none”. By setting the display value to “none”, we are
//essentially hiding the image from view.

//new Audio('<url>').play()

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
