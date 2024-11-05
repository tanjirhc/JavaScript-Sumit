const display = document.getElementById("display");

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    display.innerHTML("Geo Location is not available in your browser");
  }
}

function showPosition(position){
  display.innerHTML = "Latitude: " + position.coords.latitude + "</br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  console.log(error);
}