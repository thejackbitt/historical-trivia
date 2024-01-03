// Variable setup
var startButton = document.querySelector("#startBtn");
var highscoresButton = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var mainCard = document.querySelector("main");
var queCard = document.querySelector("#buttonContainer");
var endCard = document.querySelector("#formContainer");
var statusBar = document.querySelector("#statusContainer");
var hList = document.querySelectorAll("h1");
var pList = document.querySelectorAll("p");
var secondsLeft = 60;
var questionArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
];
var questionsRemaining;
var maxQuestions = 7;
var questionIndex;
var answerValue = true;
var score = 0;

questionsRemaining = maxQuestions;

// Function declaration
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft <= 0 || timerEl.textContent === "Complete") {
      clearInterval(timerInterval);
      timerEl.textContent = "Complete";
      endPrompt();
      return;
    }
  }, 1000);
}

function clearStartButton() {
  if (document.querySelector("#startBtn") !== null) {
    document.querySelector("#startBtn").remove();
  }
}

function addButton(buttonAnswer, truthValue) {
  var buttonEl = document.createElement("button");
  buttonEl.truthValue = truthValue;
  buttonEl.textContent = buttonAnswer;
  buttonEl.classList.add("answerBtn");
  queCard.appendChild(buttonEl);
}

function clearStatus() {
  var currentStatus = document.querySelectorAll(".answerStat");
  currentStatus.forEach((answerStat) => {
    answerStat.remove();
  });
}

function correctStatus() {
  clearStatus();
  var correctFlag = document.createElement("h3");
  correctFlag.textContent = "Correct!";
  correctFlag.style.color = "var(--h-color)";
  correctFlag.classList.add("animate-out");
  correctFlag.classList.add("answerStat");
  statusBar.appendChild(correctFlag);
  var correctTimeout = 0.8;
  var timerInterval = setInterval(function () {
    correctTimeout--;

    if (correctTimeout <= 0) {
      correctFlag.remove();
      clearInterval(timerInterval);
    }
  }, 1000);
}

function incorrectStatus() {
  clearStatus();
  var incorrectFlag = document.createElement("h3");
  incorrectFlag.textContent = "Incorrect!";
  incorrectFlag.style.color = "var(--button-color)";
  incorrectFlag.classList.add("animate-out");
  incorrectFlag.classList.add("answerStat");
  statusBar.appendChild(incorrectFlag);
  timerEl.classList.add("incorrectTimer");
  var incorrectTimeout = 0.8;
  var timerInterval = setInterval(function () {
    incorrectTimeout--;

    if (incorrectTimeout <= 0) {
      incorrectFlag.remove();
      clearInterval(timerInterval);
      timerEl.classList.remove("incorrectTimer");
    }
  }, 1000);
}

function addPoints() {
  correctStatus();
  score++;
}

function subtractPoints() {
  incorrectStatus();
  secondsLeft = secondsLeft - 5;
}

function clearQuestion() {
  var currentButtons = document.querySelectorAll(".answerBtn");
  currentButtons.forEach((answerBtn) => {
    answerBtn.remove();
  });
}

function drawQuestion(selectedQuestion) {
  // Question 1
  if (selectedQuestion === "a") {
    pList[2].textContent =
      "What was the name of the dreaded Finnish sniper in World War II who was known for burying himself in snow for camouflage?";
    clearQuestion();
    addButton("The White Killer", false);
    addButton("The Ice Man", false);
    addButton("The White Death", true);
    addButton("The Snow Queen", false);
  }

  // Question 2
  if (selectedQuestion === "b") {
    pList[2].textContent =
      "What was the name of the crazed British captain in World War II who was known for bringing a sword and shield into battle?";
    clearQuestion();
    addButton("Cpt. Crunch", false);
    addButton("Cpt. Mad Jack", true);
    addButton("Cpt. Bonesaw", false);
    addButton("Cpt. Mad Dog", false);
  }

  // Question 3
  if (selectedQuestion === "c") {
    pList[2].textContent =
      "Who fired the notorious 'shot heard round the world' that started the Revolutionary War?";
    clearQuestion();
    addButton("Nobody knows", true);
    addButton("An English Soldier", false);
    addButton("An American Soldier", false);
    addButton("Major Pitcairn", false);
  }

  // Question 4
  if (selectedQuestion === "d") {
    pList[2].textContent =
      "What was the name of the speedy Finnish soldier that accidentally overdosed on Pervitin (and survived)?";
    clearQuestion();
    addButton("Lennart Oesch", false);
    addButton("Simo Häyhä", false);
    addButton("Aimo Koivunen", true);
    addButton("Kaarlo Edward Kivekäs", false);
    questionArray.splice(i, 1);
  }

  // Question 5
  if (selectedQuestion === "e") {
    pList[2].textContent =
      "What was the name of the first airman to recieve the Medal of Honor in World War I?";
    clearQuestion();
    addButton("Kurt Wintgens", false);
    addButton("Manfred von Richthofen", false);
    addButton("Frank Luke", true);
    addButton("Eddie Rickenbacker", false);
  }

  // Question 6
  if (selectedQuestion === "f") {
    pList[2].textContent =
      "What was the operation codename of the invasion of Berlin by the Soviet Union in World War II?";
    clearQuestion();
    addButton("Operation Unthinkable", false);
    addButton("Operation Otto", true);
    addButton("Operation Barbarossa", false);
    addButton("Operation Eisenfaust", false);
  }

  // Question 7
  if (selectedQuestion === "g") {
    pList[2].textContent =
      "What new rapid-fire weapon did the English soldiers use in the revolutionary war?";
    clearQuestion();
    addButton("The M1 Garand", false);
    addButton("The Rocket Launcher", false);
    addButton("The Musket", false);
    addButton("The Puckle Gun", true);
  }

  // Question 8
  if (selectedQuestion === "h") {
    pList[2].textContent = "In what year did the Spanish Civil War end?";
    clearQuestion();
    addButton("1886", false);
    addButton("1936", false);
    addButton("1939", true);
    addButton("1898", false);
  }

  // Question 9
  if (selectedQuestion === "i") {
    pList[2].textContent =
      "What was the name of the Hungarian nuclear physicist that developed the H-bomb?";
    clearQuestion();
    addButton("Robert Oppenheimer", false);
    addButton("Hans Bethe", false);
    addButton("Edward Teller", true);
    addButton("Enrico Fermi", false);
  }

  // Question 10
  if (selectedQuestion === "j") {
    console.log("Question #" + questionArray[i]);
    pList[2].textContent =
      "In what year did the infamous Battle of Gettysburg of the Civil War take place?";
    clearQuestion();
    addButton("1870", false);
    addButton("1863", true);
    addButton("1859", false);
    addButton("1865", false);
  }

  // Question 11
  if (selectedQuestion === "k") {
    pList[2].textContent =
      "What war did US President Theodore Roosevelt personally fight in?";
    clearQuestion();
    addButton("Spanish-American War", true);
    addButton("Mexican American War", false);
    addButton("World War I", false);
    addButton("War of 1812", false);
  }

  // Question 12
  if (selectedQuestion === "l") {
    pList[2].textContent =
      "What war did US President Theodore Roosevelt personally fight in?";
    clearQuestion();
    addButton("Spanish-American War", true);
    addButton("Mexican American War", false);
    addButton("World War I", false);
    addButton("War of 1812", false);
  }

  // Question 13
  if (selectedQuestion === "m") {
    pList[2].textContent =
      "What international agreements afford rights and protections to non-combatants?";
    clearQuestion();
    addButton("The Paris Accords", false);
    addButton("The Soldier Act", false);
    addButton("The Geneva Conventions", true);
    addButton("The UN Peace Treaty", false);
  }

  // Question 14
  if (selectedQuestion === "n") {
    pList[2].textContent =
      "How did the Italian Fascist dictator Benito Mussolini flee the country during the Four Days of Naples?";
    clearQuestion();
    addButton("By hanglider", true);
    addButton("In a tank", false);
    addButton("In a helicopter", false);
    addButton("Using a fake ID", false);
  }

  hList[0].textContent = "Question #" + (maxQuestions - questionsRemaining);
  startButton.remove();
  console.log(questionArray);
}

function endPrompt() {
  clearStatus();
  clearQuestion();
  secondsLeft = 0;

  if (score === 0) {
    hList[0].textContent = "Better Luck Next Time.";
    pList[2].innerHTML =
      "Well, you got no questions right. <br> <br> Type in your initials and click the button below to save your score.";
  } else if (score === 1) {
    hList[0].textContent = "Better Luck Next Time.";
    pList[2].innerHTML =
      "You got a single question right! <br> <br> Type in your initials and click the button below to save your score.";
  } else {
    hList[0].textContent = "Great Job, History Buff!";
    pList[2].innerHTML =
      "You got " +
      score +
      " questions right! <br> <br> Type in your initials and click the button below to save your score.";
  }
  pList[2].style.textAlign = "center";
  addForm();
}

function addRefreshBtn() {
  if (document.querySelector(".reloadBtn") === null) {
    var refreshBtn = document.createElement("button");
    refreshBtn.textContent = "Retake Quiz";
    refreshBtn.classList.add("reloadBtn");
    mainCard.insertBefore(refreshBtn, queCard);
  }
}

function showHighscores() {
  clearStatus();
  clearQuestion();
  clearForm();
  clearStartButton();
  secondsLeft = 0;

  var storedScores = localStorage.getItem("quizScores");
  if (storedScores) {
    var scores = JSON.parse(storedScores);
    hList[0].textContent = "Highscores";
    pList[2].innerHTML = scores
      .map(
        (score, index) =>
          index +
          1 +
          ". " +
          score.name +
          " .............................. " +
          score.score
      )
      .join("<br>");
  } else {
    hList[0].textContent = "Highscores";
    pList[2].innerHTML = "No highscores saved yet.";
  }
  pList[2].style.textAlign = "center";

  addRefreshBtn();
}

function addForm() {
  if (
    document.querySelector(".submitBtn") === null &&
    document.querySelector("textarea") === null
  ) {
    var formBtn = document.createElement("button");
    var formTextArea = document.createElement("textarea");
    formTextArea.maxLength = "3";
    formBtn.classList.add("submitBtn");
    formBtn.textContent = "Save";
    formBtn.style.padding = "12px 50px";
    endCard.appendChild(formTextArea);
    endCard.appendChild(formBtn);
  }
}

function clearForm() {
  if (
    document.querySelector("textarea") !== null &&
    document.querySelector(".submitBtn") !== null
  ) {
    document.querySelector("textarea").remove();
    document.querySelector(".submitBtn").remove();
  }
}

function changeQuestion() {
  if (questionsRemaining !== 0) {
    console.log(questionsRemaining);
    questionsRemaining--;
    questionIndex = random(0, questionArray.length - 1);
    var selectedQuestion = questionArray[questionIndex];
    drawQuestion(selectedQuestion);
    questionArray.splice(questionIndex, 1);
  } else {
    endPrompt();
  }
}

function clearMemory() {
  localStorage.removeItem("quizScores", JSON.stringify(score));
}

// Event listener for the start button
startButton.addEventListener("click", function () {
  if (secondsLeft === 60) {
    startTimer();
    changeQuestion();
  }
});

// Event listener for the highscores button
highscoresButton.addEventListener("click", function () {
  if (secondsLeft === 60 || secondsLeft === 0) {
    showHighscores();
  }
});

//Event listener for the answer buttons
queCard.addEventListener("click", function (event) {
  var clickedElement = event.target;
  if (clickedElement.tagName === "BUTTON") {
    if (clickedElement.truthValue) {
      addPoints();
    } else {
      subtractPoints();
    }
    changeQuestion();
  }
});

//Event listeners for the form button
endCard.addEventListener("click", function (event) {
  var clickedElement = event.target;
  if (clickedElement.tagName === "BUTTON") {
    event.preventDefault();

    var form = document.querySelector("textarea");

    var newScore = {
      name: form.value.trim(),
      score: score,
    };

    var scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push(newScore);

    scores = scores.sort((a, b) => b.score - a.score).slice(0, 5);

    localStorage.setItem("quizScores", JSON.stringify(scores));

    showHighscores();
  }
});

endCard.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    var form = document.querySelector("textarea");

    var newScore = {
      name: form.value.trim(),
      score: score,
    };

    var scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push(newScore);

    scores = scores.sort((a, b) => b.score - a.score).slice(0, 5);

    localStorage.setItem("quizScores", JSON.stringify(scores));

    showHighscores();
  }
});

//Event listener for the refresh button
mainCard.addEventListener("click", function (event) {
  var clickedElement = event.target;
  if (clickedElement.tagName === "BUTTON") {
    if (clickedElement === document.querySelector(".reloadBtn")) {
      location.reload();
    }
  }
});
