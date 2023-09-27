import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./weatherforcast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
          console.log(response);
          setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
                const apiKey = "62231151ce343c4d68652e1617efc22f";
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                axios.get(apiUrl).then(handleResponse);
  }
    
  function handleSubmit(event) {
    event.preventDefault();
    search();
  } 

  
  function handleCityChange(event) {
    setCity(event.target.value);
  }
    

    if (weatherData.ready) {
        return (
          <div className="weather">
            <div className="weather-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      className="form-control"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="search"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>

              <WeatherInfo data={weatherData} />
              <WeatherForecast data={weatherData.coordinates} />
            </div>
          </div>
        );}
        else {
      search();
           return "Loading..."; 
        }
    
}
