import React from "react";
import WeatherIcon from "./weatherIcon";
import "./weatherforcast.css"
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response);
}


    const apiKey = "10ddec5bo5f377a9f7bt494ff0e6d925";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.data.lon}&lat=${props.data.lat}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon icon="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
