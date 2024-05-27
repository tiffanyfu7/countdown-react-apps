import React from 'react'

const HourlyWeather = ({ hourly, unitString}) => {
    //API Forecast doc: https://openweathermap.org/api/hourly-forecast
    const list = hourly.list.slice(0, 12);
    
    return (
        <>
            <div className="horizontal-display">
            <div id="hourly-display">
                {list && <h3> Hourly Forecast </h3>}
                <div id="hourly-container" className="gallery-container">
                    {list &&
                        list.map((forecast, index) => (
                            <div id="hourly-card" className="gallery-card" key={index}>
                                <p>{new Date(1000 * forecast.dt).getUTCHours()+":00"}</p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                    width="30px"
                                />
                                <p>{Math.round(forecast.main.temp)}{unitString}</p>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export default HourlyWeather