let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let savedTimes = [];

function startTimer() {
  interval = setInterval(function () {
    milliseconds++;
    if (milliseconds == 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    document.getElementById("milliseconds").innerHTML =
      formatTime(milliseconds);
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
}




document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);


function saveTime(){
    let time = document.getElementById("hours").innerText + ":" + document.getElementById("minutes").innerText + ":" + document.getElementById("seconds").innerText + ":" + document.getElementById("milliseconds").innerText;
    savedTimes.push(time)
    
    let savedTimesList = document.getElementById("saved-times");
    let savedTimeItem = document.createElement("li");
    savedTimeItem.innerText = time;
    savedTimesList.appendChild(savedTimeItem);
}

document.getElementById("save").addEventListener("click", saveTime);



function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("milliseconds").innerHTML = "000";
  stopTimer();
  savedTimes = [];
  let savedTimesList = document.getElementById("saved-times");
    savedTimesList.innerHTML = "";
}

function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
  }
  }
  
  function formatMilliseconds(time) {
    if (time < 10) {
      return "00" + time;
    } else if (time < 100) {
      return "0" + time;
    } else {
      return time;
  }
  }