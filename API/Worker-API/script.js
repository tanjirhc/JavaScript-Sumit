let w;

function startWorker() {
  if(typeof Worker !== 'undefined') {
    //Worker Available

    // if w worker is not already defined
    if(typeof w == 'undefined') {
      // create a new worker called 'w'
      w = new Worker("worker.js");
    }
    
    

  } else {
      alert("Your browser doesn't support web worker!");
  }
}