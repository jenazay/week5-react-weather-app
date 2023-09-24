import React from "react";
import FormatDate from "./formatDate";

export default function WeatherInfo(props) {
    return (
      <div className="weatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
                className="float-left"
                alt="rain"
              />
              <div className="float-left d-inline">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>humidity : {props.data.humidity}%</li>
              <li>wind : {Math.round(props.data.wind)} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}