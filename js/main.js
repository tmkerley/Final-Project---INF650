//api opject
const api = {
    key: "06cd781717482374a4e20026ddc64b05",
    base: "https://api.openweathermap.org/data/2.5/"
  }
//sets searchbox to watch for a keypress event  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);

//when "carriage return" is pressed, passes search box contents to getResults function  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
//fetches weather data, passes it as JSON data, and passes it to displayResults  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
//calls HTML classes and sets their innerText to weather JSON data.  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°F Low / ${Math.round(weather.main.temp_max)}°F High`;
  }
  
//Formats weather.JSON data to Day Date Month and Year.  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }