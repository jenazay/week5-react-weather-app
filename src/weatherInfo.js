import React from "react";
import FormatDate from "./formatDate";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <div className="float-left d-inline">
                <WeatherIcon icon={props.data.icon} size={52} />
              </div>
              <div className="float-left d-inline">
                <WeatherTemperature temp={props.data.temperature} />
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