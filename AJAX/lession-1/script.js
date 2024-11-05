function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = function() {     //callback function
    const  container = document.getElementById('demo');
    demo.innerHTML = xhr.responseText;
  }
}