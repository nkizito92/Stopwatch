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
