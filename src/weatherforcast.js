import React,{useState} from "react";
import "./weatherforcast.css"
import axios from "axios";
import ForcastDay from "./forcasday";

export default function WeatherForecast(props) {
  let [ loaded, setLoaded ] = useState(false);
  let [ forcast, setForcast ]= useState(null);

    function handleResponse(response) {
      console.log(response);
      setForcast(response.data.daily[0]);
      setLoaded(true);
      
}


  if (loaded) {
    console.log(forcast);
    return (
      <div className="WeatherForecast">
        <ForcastDay data={forcast} />
      </div>
    );
  }
  else {
        const apiKey = "10ddec5bo5f377a9f7bt494ff0e6d925";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.data.lon}&lat=${props.data.lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
