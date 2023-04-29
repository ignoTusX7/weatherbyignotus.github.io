function refreshTime() {
  var date = new Date();
  var current_date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  document.getElementById("p1").innerHTML = current_date;
  var datetime = new Date().toLocaleTimeString();
  document.getElementById("p2").textContent = datetime;
}
setInterval(refreshTime, 1000);

function onStart(){
//   const url = `data.json`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=c8b65b21210c0c4a768127634ed37c44`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.main.temp);
      document.getElementById("city").innerHTML = data.name + "," + data.sys.country;
      temp = parseInt(data.main.temp) - 273.15;
      temp = temp.toFixed(2);
      document.getElementById("description").innerHTML = data.weather[0].description;
      document.getElementById("temp").innerHTML = temp + "°C";

      document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
      document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    })
    .catch((error) => {
      console.log(error);
    });
}

function getWeatherrep() {
  const search = document.getElementById("searchValue").value;
  console.log(search);
//   const url = `data.json`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c8b65b21210c0c4a768127634ed37c44`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.main.temp);
      document.getElementById("city").innerHTML = data.name + "," + data.sys.country;
      temp = parseInt(data.main.temp) - 273.15;
      temp = temp.toFixed(2);
      document.getElementById("description").innerHTML = data.weather[0].description;
      document.getElementById("temp").innerHTML = temp + "°C";

      document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
      document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    })
    .catch((error) => {
      console.log(error);
    });
}
var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
