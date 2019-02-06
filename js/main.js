var timer = document.getElementById("timer"),
  timer2 = document.getElementById("timer2"),
  timer3 = document.getElementById("timer3"),
  started = document.querySelectorAll("#run"),
  startAll = document.getElementById("runAll"),
  paused = document.querySelectorAll("#pause"),
  pauseAll = document.getElementById("pauseAll"),
  resetBtn = document.querySelectorAll("#reset"),
  resetAll = document.getElementById("resetAll"),
  timers = [timer, timer2, timer3],
  watch = new Stopwatch(timer),
  watch2 = new Stopwatch(timer2),
  watch3 = new Stopwatch(timer3),
  watchers = [watch, watch2, watch3];
var selector = "";

function start() {
  for (let i = 0; i < timers.length; i++) {
    watchers[i].start();
    paused[i].style.display = "inline-block";
    started[i].style.display = "none";
    paused[i].innerHTML = "&#10074; &#10074;";
    paused[i].style.backgroundColor = "orange";
  }
}

function starting() {
    watchers[selector].starting()
    paused[selector].style.display = "inline-block";
    started[selector].style.display = "none";
    paused[selector].innerHTML = "&#10074; &#10074;";
    paused[selector].style.backgroundColor = "orange";
}

function startSelect(starter) {
  starter.starting();
  paused[selector].style.display = "inline-block";
  paused[selector].innerHTML = "&#10074; &#10074;";
  paused[selector].style.backgroundColor = "orange";
  colorSwitch = "g";
}

function stopped() {
  for (let i = 0; i < timers.length; i++) {
    paused[i].innerHTML = " &#9658;";
    paused[i].style.backgroundColor = "green";
    watchers[i].stopped();
    colorSwitch = "o";
  }
}
function stopSelect(stopper) {
  paused[selector].innerHTML = " &#9658;";
  paused[selector].style.backgroundColor = "green";
  stopper.stopped();
}
