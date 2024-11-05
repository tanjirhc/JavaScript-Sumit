let w;

function startWorker() {
  if(typeof Worker !== 'undefined') {
    //Worker Available

    // if w worker is not already defined
    if(typeof w == 'undefined') {
      // create a new worker called 'w'
      w = new Worker("worker.js");
    }
    

    // listening for worker events/message
    w.onmessage = function(event) {
      document.getElementById("demo").innerHTML  = event.data;
    }
  } else {
      alert("Your browser doesn't support web worker!");
  }
}

function stopWorker() {
  if(typeof Worker !== 'undefined') {
    //Worker Available
    w.terminate();
    w = undefined;
  } else {
    alert("Your browser doesn't support web worker!");
  }
}