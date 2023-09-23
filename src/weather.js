import React from "react";
import "./weather.css"

export default function Weather() {
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

          <h1>New york</h1>
          <ul>
            <li>Saturday 09:00</li>
            <li>Rain</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                alt="rain"
              />
              6°C
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 94%</li>
                <li>Humidity: 87%</li>
                <li>Wind: 27 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}