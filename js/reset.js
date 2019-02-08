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
  addStart();
  selector = "";
});

function addStart() {
  started[0].addEventListener("click", zero);
  started[1].addEventListener("click", one);
  started[2].addEventListener("click", two);
  paused[0].addEventListener("click", pZero);
  paused[1].addEventListener("click", pOne);
  paused[2].addEventListener("click", pTwo);
  resetBtn[0].addEventListener("click", rZero);
  resetBtn[1].addEventListener("click", zOne);
  resetBtn[2].addEventListener("click", zTwo);
}