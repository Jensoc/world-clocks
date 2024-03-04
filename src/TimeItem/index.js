import React, { useEffect, useState } from "react";
import './TimeItem.css'
import { useFetch } from "../DropdownContent/useFetch";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function TimeItem({
  id,
  onDelete}) {

  const decreasedId = (id) =>{
    return id - 1
  }

  const timezoneClockList = JSON.parse(localStorage.getItem("timezone_v1"));

  if (timezoneClockList) {
    var timezone = timezoneClockList[decreasedId(id)];
  }


  const [time, setTime] = useState(null);
  const [city, setCity] = useState(null);

  let url = "http://worldtimeapi.org/api/timezone/" + timezone;
  // console.log("timezone: ", timezone);
  const { time: fetchedTime, city: fetchedCity } = useFetch(url);

  useEffect(() => {
    setTime(fetchedTime);
    setCity(fetchedCity);
  }, [fetchedCity, fetchedTime]);


  let day;
  if (time) {
    const formattedTime = parseInt(time.replace(":", ""));
    (formattedTime > 600 && formattedTime < 2000) ? day = <FaSun color='#FFC73A'/> : day = <FaMoon color='#674689'/>;
  }

  return(
    <li className="clock-item">
      <p>{id}</p>
      <span className={`status`}>{day}</span>
      <p className="city">{city}</p>
      <p>{time}</p>
      <span
        className="delete-clock"
        onClick={onDelete}
        >✖</span>
    </li>
  );
}

export {TimeItem};