import React, { useEffect, useState } from 'react'
import { API_KEY } from '../App';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import News from './News';

const FetchWeather = ({ location, units }) => {
    const [current, setCurrent] = useState(null);
    const [hourly, setHourly] = useState(null);
    const [daily, setDaily] = useState(null);

    let unitString;
    if (units == "imperial") unitString = "°F"
    else if (units == "metric") unitString = "°C"
    else unitString = "K"

    useEffect(() => {
        const fetchWeather = async (location) => {
            //API Current doc: https://openweathermap.org/current 
            //units: imperial = F, metric = C, standard = K
            const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=${units}&appid=${API_KEY}`
            const responseCurrent = await fetch(urlCurrent)
                .catch((err) => (console.error(err)));
            const jsonCurrent = await responseCurrent.json();
            setCurrent(jsonCurrent);

            //API Historic doc: https://openweathermap.org/history
            const urlHourly = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location.lat}&lon=${location.lon}&units=${units}&appid=${API_KEY}`
            const responseHourly = await fetch(urlHourly)
                .catch((err) => (console.error(err)));
            const jsonHourly = await responseHourly.json();
            setHourly(jsonHourly);

            //API Daily: https://docs.openweather.co.uk/forecast16 
            const urlDaily = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${location.lat}&lon=${location.lon}&units=${units}&cnt=7&appid=${API_KEY}`
            const responseDaily = await fetch(urlDaily)
                .catch((err) => (console.error(err)));
            const jsonDaily = await responseDaily.json();
            setDaily(jsonDaily);

        }
        fetchWeather(location);
    }, [location]);

    return (
        <>
            <div className="horizontal-display">
                {current && <CurrentWeather current={current} unitString={unitString} />}
                {daily && <DailyWeather daily={daily} unitString={unitString}/>}
            </div>
            {hourly && <HourlyWeather hourly={hourly} unitString={unitString}/>}
            {hourly && daily && <News />}
        </>
    );
}

export default FetchWeather