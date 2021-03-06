import React, { useState } from "react";
import { useHistory } from "react-router";
import UpcomingWeather from "./UpcomingWeather";
import './styles.css';
const api = {
  key: "3fbb2b31fd3e77c536be64abc677a4d1",
  base: "https://api.openweathermap.org/data/2.5/"
};

function Logout() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});
  const[show,setShow]=useState("");
  
  function display(){
    setShow("welcome to our weather app")
  }
  function hide(){
      setShow("");
  }
  let history = useHistory();
 
  const search = (evt) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "app warm" 
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <select
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={search}
            >
            <option>---Select---</option>
            <option>Kolkata</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Pune</option>
            <option>Patna</option>
            <option>Hyderabad</option>
            <option>Australia</option>
            <option>Antarctica</option>
            <option>London</option>
          </select>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className="body">
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}??c</div>
              <div className="weather">
                {weather.weather[0].description.toUpperCase()}
                <br />
                Humidity:{weather.main.humidity} ??F
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <UpcomingWeather location={query} />
      <footer className="last" >
        <button onClick={history.goBack}>SignOut</button>
        <button  onClick={display} onDoubleClick={hide}>About Us</button> 
        <div className="about" >
        {show}
        </div>
        </footer>
        </main>
    </div>
  );
}
export default Logout;
