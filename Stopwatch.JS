let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const millisecondsDisplay = document.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

function startTimer() {
  isRunning = true;
  timer = setInterval(updateTime, 10);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTime();
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  displayTime();
}

function displayTime() {
  hoursDisplay.textContent = padTime(hours);
  minutesDisplay.textContent = padTime(minutes);
  secondsDisplay.textContent = padTime(seconds);
  millisecondsDisplay.textContent = padMilliseconds(milliseconds);
}

function padTime(time) {
  return (time < 10) ? `0${time}` : time;
}

function padMilliseconds(time) {
  return (time < 100) ? `0${time}` : time;
}

startButton.addEventListener('click', () => {
  if (!isRunning) {
    startTimer();
  }
});

pauseButton.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
  }
});

resetButton.addEventListener('click', resetTimer);

resetTimer(); // Initialize display
