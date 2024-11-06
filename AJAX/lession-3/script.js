function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = function() {     //callback function
    console.log("Response Finished");
    const  container = document.getElementById('demo');
    container.innerHTML = this.responseText;
  };

  // prepare request - Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
  xhr.open("GET", "./data/data.txt", true);

  // send request
  xhr.send();

  console.log("hello");

  // cancel request
  // xhr.abort();
}

