function getData() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    console.log(this.responseText);
  }

  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
}

function sendData() {

}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);