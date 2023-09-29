import React from "react";
import ForcastWeekDays from "./forcastweekdays";

export default function ForcastDay(props) {
  return(
    <div className="forcastDay">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            <ForcastWeekDays date={new Date(props.data.time*1000)}/>
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
    </div>
  );
}