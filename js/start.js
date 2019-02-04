started[0].addEventListener("click", function() {
  selector = 0;
  startSelect(watch);
});
started[1].addEventListener("click", function() {
  selector = 1;
  startSelect(watch2);
});
started[2].addEventListener("click", function() {
  selector = 2;
  startSelect(watch3);
});

// starts all stopwatches
startAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].start();
    paused[i].style.display = "inline-block";
    started[i].style.display = "inline-block";
  }
});
