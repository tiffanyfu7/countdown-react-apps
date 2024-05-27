import React from 'react'
import './components.css'

const CurrentWeather = ({ current, unitString }) => {
    const data = {
        name: current.name,
        main: current.weather[0].main,
        temp: Math.round(current.main.temp),
        high: Math.round(current.main.temp_max),
        low: Math.round(current.main.temp_min),
        icon: current.weather[0].icon
    };

    return (
        <div id="current-card">
            <div style={{verticalAlign:"center"}}>
                <p style={{lineHeight:"1.3"}}>{data.name}</p>
                <h2>{data.temp}{unitString}</h2>
                <img
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    width="40px"
                />
                <p>{data.main}</p>
                <p style={{ fontSize: "10px" }}>H: {data.high}{unitString} L: {data.low}{unitString}</p>
            </div>
        </div>
    );
}

export default CurrentWeather