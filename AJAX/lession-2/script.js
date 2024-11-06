function loadData(url, ) {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = function() {     //callback function
    const  container = document.getElementById('demo');
    demo.innerHTML = this.responseText;
  };

  // prepare request - Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
  xhr.open("GET", "./data/data.txt");

  // send request
  xhr.send();

  // cancel request
  // xhr.abort();
}

function myCallback1() {
  const  container = document.getElementById('demo');
    demo.innerHTML = this.responseText;
}

function myCallback2() {
  const  container = document.getElementById('demo2');
    demo.innerHTML = this.responseText;
}
