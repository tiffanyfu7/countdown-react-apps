import React from 'react'

const DailyWeather = ({ daily, unitString }) => {
    const list = daily.list;

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date().getUTCDay();
    for (let i = 0; i < 7; i++) {
        const idx = (today + 1 + i) % 7;
        list[i]["weekday"] = weekdays[idx];
    }

    return (
        <>
            <div id="daily-display" className="display">
                {list && <h3> Daily Forecast </h3>}
                <div id="daily-container" className="gallery-container">
                    {list &&
                        list.map((forecast, index) => (
                            <div id="daily-card" className="gallery-card" key={index}>
                                <p>{forecast.weekday}</p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                    width="30px"
                                />
                                <p>{Math.round(forecast.temp.day)}{unitString}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default DailyWeather