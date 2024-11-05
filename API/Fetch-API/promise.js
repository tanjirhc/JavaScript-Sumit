const display = document.getElementById("display");
function getData() {
  fetch("http://127.0.0.1:5500/API/Fetch-API/data.txt")
    .then(res => res.text())
    .then(data => {
      console.log("hello 2");
      display.innerText = data;
    })


    
}