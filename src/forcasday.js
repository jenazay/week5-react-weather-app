import React from "react";

export default function ForcastDay(props) {
    <div className="forcastDay">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            {props.data.temperature.maximum}
          </div>
          <img src={props.data.condition.icon_url} alt="icon" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {props.data.temperature.maximum}°
            </span>
            <span className="WeatherForecast-temperature-min">
              {props.data.temperature.minimum}°
            </span>
          </div>
        </div>
      </div>
    </div>;
}