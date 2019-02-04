// resets all Stopwatches
resetAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].reset();
    watchers[i].stop();
    paused[i].style.display = "none";
    started[i].style.display = "inline-block";
  }
  x = "";
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
