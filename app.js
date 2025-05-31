let timer = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let interval;
let sessions = 0;

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const statusElement = document.getElementById('status');
const counterElement = document.getElementById('counter');

function updateTimer() {
  const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');
  timerElement.textContent = `${minutes}:${seconds}`;
}

startBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(interval);
    startBtn.textContent = 'Start';
  } else {
    interval = setInterval(() => {
      if (timer > 0) {
        timer--;
        updateTimer();
      } else {
        clearInterval(interval);
        sessions++;
        counterElement.textContent = sessions;
        alert('Session complete!');
        timer = 25 * 60;
        updateTimer();
      }
    }, 1000);
    startBtn.textContent = 'Pause';
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  isRunning = false;
  startBtn.textContent = 'Start';
  timer = 25 * 60;
  statusElement.textContent = 'Ready to Focus';
  updateTimer();
});

updateTimer();