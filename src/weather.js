import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

    
    function handleResponse(response) {
          console.log(response);
          setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "wednesday 7",
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

              <h1>{weatherData.city}</h1>
              <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix">
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                      className="float-left"
                      alt="rain"
                    />
                    <div className="float-left d-inline">
                      <span className="temperature">
                        {Math.round(weatherData.temperature)}
                      </span>{" "}
                      <span className="unit">°C</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>humidity : {weatherData.humidity}%</li>
                    <li>wind : {Math.round(weatherData.wind)}</li>
                  </ul>
                </div>
              </div>
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
