let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    startTime = Date.now() - lapCount * 1000;
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, "0");
  return `${minutes}:${seconds}:${milliseconds}`;
}

function lapReset() {
  if (isRunning) {
    const elapsedTime = Date.now() - startTime;
    const formattedTime = formatTime(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${formattedTime}`;
    document.getElementById("laps").prepend(lapItem);
    lapCount++;
  } else {
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
  }
}
