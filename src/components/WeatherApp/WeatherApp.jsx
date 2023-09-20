import React from 'react'
import './WeatherApp.css'
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const WeatherApp = () => {

    let api_key = "afd9e51caac3d2ba4129e8ffbf0cf199";
    const search = () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            //If we have nothing in the input string then return 0.
            return 0;
        }
        let url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=afd9e51caac3d2ba4129e8ffbf0cf199";
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">18 KM/H</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp