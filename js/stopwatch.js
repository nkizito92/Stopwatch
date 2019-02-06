function Stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;

  function resetTime() {
    if (this.isOn) {
      time += DateTime();
    }

    elem.textContent = timeFormatter(time);
  }

  function DateTime() {
    var now = Date.now();
    var timePassed = now - offset;

    offset = now;

    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

    var mins = time.getMinutes().toString();
    var secs = time.getSeconds().toString();
    var millisecs = time.getMilliseconds().toString();

    if (mins.length < 2) {
      mins = "0" + mins;
    }

    if (secs.length < 2) {
      secs = "0" + secs;
    }

    while (millisecs.length < 3) {
      millisecs = "0" + millisecs;
    }

    return mins + " : " + secs + " : " + millisecs;
  }

  this.start = function() {
    interval = setInterval(resetTime.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
  };
  
  this.starting = function() {
    interval = setInterval(resetTime.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
  };

  this.stopped = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  this.resetted = function() {
    time = 0;
    resetTime();
  };

  this.isOn = false;
}
