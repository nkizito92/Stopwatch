  started[0].addEventListener("click", function() {
  paused[0].style.display = "inline-block";
  startSelect(watch);
});
started[1].addEventListener("click", function() {
  paused[1].style.display = "inline-block";
  startSelect(watch2);
});
started[2].addEventListener("click", function() {
  paused[2].style.display = "inline-block";
  startSelect(watch3);
});

// starts all stopwatches
startAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].start();
    paused[i].style.display = "inline-block";
    started[i].style.display = "inline-block";
  }
  pauseAll.style.display = "inline-block";
});
 