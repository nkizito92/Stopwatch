function zero() {
  selector="";
  paused[0].style.display = "inline-block";
  startSelect(watch);
  
}
function one() {
  selector="";
  paused[1].style.display = "inline-block";
  startSelect(watch2);
  
}
function two() {
  selector="";
  paused[2].style.display = "inline-block";
  startSelect(watch3);
}
started[0].addEventListener("click", zero);
started[1].addEventListener("click", one);
started[2].addEventListener("click", two);

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
 