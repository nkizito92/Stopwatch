// resets all Stopwatches
resetAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].resetted();
    watchers[i].stopped();
    paused[i].style.display = "none";
    paused[i].style.backgroundColor = "orange";
    started[i].style.display = "inline-block";
    paused[i].innerHTML = "&#10074; &#10074;";
    colorSwitch = "g";
  }
  pauseAll.style.backgroundColor = "orange";
  pauseAll.style.display = "none";
  pauseAll.innerHTML = "&#10074; &#10074;";
  startAll.addEventListener("click", runningall);
  selector = "";
});
resetBtn[0].addEventListener("click", function() {
  started[0].addEventListener("click", zero);
  watch.resetted();
  watch.stopped();
  started[0].style.display = "inline-block";
  paused[0].style.display = "none";
});
resetBtn[1].addEventListener("click", function() {
  started[1].addEventListener("click", one);
  watch2.resetted();
  watch2.stopped();
  started[1].style.display = "inline-block";
  paused[1].style.display = "none";
});
resetBtn[2].addEventListener("click", function() {
  started[2].addEventListener("click", two);
  watch3.resetted();
  watch3.stopped();
  started[2].style.display = "inline-block";
  paused[2].style.display = "none";
});
