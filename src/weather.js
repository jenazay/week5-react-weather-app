import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./weatherInfo";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

    
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
    
    
    

    if (weatherData.ready) {
        return (
          <div className="weather">
            <div className="weather-wrapper">
              <form>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      className="form-control"
                      autoFocus="on"
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

   <WeatherInfo data={weatherData}/>
            </div>
          </div>
        );}
        else {
            const apiKey = "62231151ce343c4d68652e1617efc22f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
           return "Loading..."; 
        }
    
}
