import React, { useState } from 'react'
import FetchWeather from './components/FetchWeather';
import News from './components/News';
import Header from './components/Header';
import Info from './components/Info';
import Settings from './components/Settings';

const Top = () => {
    const [location, setLocation] = useState(null);
    const [info, setInfo] = useState(true);
    const [settings, setSettings] = useState(false);
    const [units, setUnits] = useState("imperial");

    return (
        <>
            <Header
                location={location} setLocation={setLocation}
                info={info} setInfo={setInfo}
                settings={settings} setSettings={setSettings}
            />

            {info && <Info info={info} setInfo={setInfo} />}

            {settings && !info && <Settings
                settings={settings} setSettings={setSettings}
                units={units} setUnits={setUnits} />
            }

            {location && !info && !settings &&
                <FetchWeather location={location} units={units} />
            }
        </>
    )
}

export default Top