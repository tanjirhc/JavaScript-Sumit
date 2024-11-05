function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = function() {     //callback function
    const  container = document.getElementById('demo');
    demo.innerHTML = xhr.responseText;
  };

  // prepare request - Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
  xhr.open("GET", "./data/data.txt");

  // send request
  xhr.send();
}

