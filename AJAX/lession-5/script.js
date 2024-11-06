function sendRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        resolve(this.response);
      }

      xhr.responseType = "json";

      xhr.open(method, url);

      xhr.send();
    });
  
    return promise;
}

function getData() {
  sendRequest().then(responseData => {
    console.log(responseData);
  });
  
}

function sendData() {

}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);