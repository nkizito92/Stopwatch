
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
}
 