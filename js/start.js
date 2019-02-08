
// starts all stopwatches
startAll.addEventListener("click", runningall);
function runningall() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].start();
    paused[i].style.display = "inline-block";
    paused[i].style.backgroundColor = "orange";
    paused[i].innerHTML = "&#10074; &#10074;";
    started[i].style.display = "inline-block";
  }
  pauseAll.style.backgroundColor = "orange";
  pauseAll.innerHTML = "&#10074; &#10074;";
  pauseAll.style.display = "inline-block";
// disables indiviidual stopwatch buttons;
  resetBtn[0].removeEventListener("click", rZero);
  resetBtn[1].removeEventListener("click", rOne);
  resetBtn[2].removeEventListener("click", rTwo);
  started[0].removeEventListener("click", zero);
  started[1].removeEventListener("click", one);
  started[2].removeEventListener("click", two);
  paused[0].removeEventListener("click", pZero);
  paused[1].removeEventListener("click", pOne);
  paused[2].removeEventListener("click", pTwo);
}
 