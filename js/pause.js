// pauses all stopwatches]
var colorSwitch = "g";
  pauseAll.addEventListener("click", function() {
  startAll.removeEventListener("click", runningall);
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].isOn ? watchers[i].stopped() : watchers[i].start();
   if(colorSwitch === "g") {
      paused[i].style.backgroundColor = "green";
      paused[1].style.backgroundColor = "green";
      paused[i].innerHTML = " &#9658;"; 
      paused[1].innerHTML = " &#9658;"; 
      pauseAll.style.backgroundColor = "green";
      pauseAll.innerHTML = " &#9658;"; 
      colorSwitch = "o";
        
   }
   else{
     paused[i].style.backgroundColor = "orange";
     paused[i].innerHTML = "&#10074; &#10074;";
     paused[1].style.backgroundColor = "orange";
     paused[1].innerHTML = "&#10074; &#10074;";
     pauseAll.innerHTML = "&#10074; &#10074;";
     pauseAll.style.backgroundColor = "orange";
     colorSwitch = "g";

   }
  }
});


paused[0].addEventListener("click", pZero);
paused[1].addEventListener("click", pOne);
paused[2].addEventListener("click", pTwo);