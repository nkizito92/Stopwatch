// pauses all stopwatches
pauseAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].isOn ? watchers[i].stop() : watchers[i].start();
  }
});

paused[0].addEventListener("click", function() {
  watch.isOn ? stopSelect(watch) : startSelect(watch);
});
paused[1].addEventListener("click", function() {
  watch2.isOn ? stopSelect(watch2) : startSelect(watch2);
});
paused[2].addEventListener("click", function() {
  watch3.isOn ? stopSelect(watch3) : startSelect(watch3);
});
