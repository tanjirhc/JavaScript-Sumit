function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        resolve(this.response);
      }

      xhr.responseType = "json";

      xhr.open(method, url);

      xhr.send(data);
    });
  
    return promise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(responseData => {
    console.log(responseData);
  });
  
}

function sendData() {
  sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  ).then(responseData => {
    console.log(responseData);
  });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);