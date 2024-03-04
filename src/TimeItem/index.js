import React, { useEffect, useState } from "react";
import './TimeItem.css'
import { useFetch } from "../DropdownContent/useFetch";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function TimeItem({
  id,
  onDelete}) {

  const [reload, setReload] = useState(false)

  

  const timezoneClockList = JSON.parse(localStorage.getItem("timezone_v1"));
  const timezone = "Europe/London";

  const [time, setTime] = useState(null);
  const [city, setCity] = useState(null);

  let url = "http://worldtimeapi.org/api/timezone/" + timezone;
  // console.log("timezone: ", timezone);
  
  const { time: fetchedTime, city: fetchedCity } = useFetch(url);

    useEffect(() => {
      setTime(fetchedTime);
      setCity(fetchedCity);
    }, [fetchedCity, fetchedTime]);

    setInterval(() => {
      setReload(!reload)
      console.log("reload!", time, reload)
    }, 60000);


  let day;
  if (time) {
    const formattedTime = parseInt(time.replace(":", ""));
    (formattedTime > 600 && formattedTime < 2000) ? day = <FaSun color='#FFC73A'/> : day = <FaMoon color='#674689'/>;
  }

  return(
    <li className="clock-item">
      <span className={`status`}>{day}</span>
      <p className="city">{city}</p>
      <p>{id}</p>
      <p>{time}</p>
      <span
        className="delete-clock"
        onClick={onDelete}
        >✖</span>
    </li>
  );
}

export {TimeItem};