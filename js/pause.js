// pauses all stopwatches]
var colorSwitch = "gren";
pauseAll.addEventListener("click", function() {
  for (let i = 0; i < watchers.length; i++) {
    watchers[i].isOn ? watchers[i].stop() : watchers[i].start();
  }
       if(colorSwitch === "gren"){ 
           pauseAll.style.backgroundColor = "green";
           pauseAll.textContent = "Resume"; 
           colorSwitch = "orang";
       }
       else{
             colorSwitch = "gren"; 
             pauseAll.textContent = "Pause";
             pauseAll.style.backgroundColor = "orange";
       } 
});
paused[0].addEventListener("click", function() {
  selector = 0;
  watch.isOn ? stopSelect(watch) : startSelect(watch);
});
paused[1].addEventListener("click", function() {
  selector = 1;
  watch2.isOn ? stopSelect(watch2) : startSelect(watch2);
  
});
paused[2].addEventListener("click", function() {
  selector = 2;
  watch3.isOn ? stopSelect(watch3) : startSelect(watch3);
});
