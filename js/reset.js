// resets all Stopwatches
resetAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].reset();
    watchers[i].stop();
    paused[i].style.display = "none";
    paused[i].style.backgroundColor = "orange";
    started[i].style.display = "inline-block";
    paused[i].textContent = "Pause";
    colorSwitch = "g";
  }
  pauseAll.style.backgroundColor = "orange";
  pauseAll.style.display = "none";
  pauseAll.textContent = "Pause";
  startAll.addEventListener("click", runningall);
  
});
resetBtn[0].addEventListener("click", function() {
  watch.reset();
  watch.stop();
  started[0].style.display = "inline-block";
  paused[0].style.display = "none";
});
resetBtn[1].addEventListener("click", function() {
  watch2.reset();
  watch2.stop();
  started[1].style.display = "inline-block";
  paused[1].style.display = "none";
});
resetBtn[2].addEventListener("click", function() {
  watch3.reset();
  watch3.stop();
  started[2].style.display = "inline-block";
  paused[2].style.display = "none";
});
