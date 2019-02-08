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

// removing a stop pause function

function pZero (){
  started[0].removeEventListener("click", zero);
  selector = 0;
  watch.isOn ? stopSelect(watch) : startSelect(watch);
  
}
function pOne () {
  started[1].removeEventListener("click", one);
  selector = 1;
  watch2.isOn ? stopSelect(watch2) : startSelect(watch2);
  
};
function rZero() {
  started[0].addEventListener("click", zero);
  watch.resetted();
  watch.stopped();
  started[0].style.display = "inline-block";
  paused[0].style.display = "none";
}
function zOne() {
  started[1].addEventListener("click", one);
  watch2.resetted();
  watch2.stopped();
  started[1].style.display = "inline-block";
  paused[1].style.display = "none";
}
function pTwo ()  {
  started[2].removeEventListener("click", two);
  selector = 2;
  watch3.isOn ? stopSelect(watch3) : startSelect(watch3);
  

};


function zTwo() {
  started[2].addEventListener("click", two);
  watch3.resetted();
  watch3.stopped();
  started[2].style.display = "inline-block";
  paused[2].style.display = "none";
}