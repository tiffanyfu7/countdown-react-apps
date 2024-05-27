import React, { useState, useEffect } from 'react'
import { API_KEY } from '../App';

const SearchLocation = ({location, setLocation}) => {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchLocation = async (search) => { 
            //API doc: https://openweathermap.org/api/geocoding-api#direct_name
            //const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${search.input}&appid=${API_KEY}`
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.input}&limit=5&appid=${API_KEY}`
            const response = await fetch(url)
                .catch((err) => (console.error(err)));
            const json = await response.json();
            setLocation({ lat: json[0].lat, lon: json[0].lon });
        }
        if(search !== "")
            fetchLocation(search);
    }, [search])

    const handleChange = (e) => {
        e.preventDefault();
        setLocation("");
        setInput(e.target.value);
    }
    
    return (
        <>
            <div id="input-bar">
                <input
                    type="search"
                    placeholder="Search a Location..."
                    onChange={handleChange}
                    value={input} />
                <button id="search-button" onClick={() => setSearch({ input })}>
                    GO
                </button>
            </div>
            {/*{location !== null && <FetchWeather location={location} />} */}
        </>
    )
}

export default SearchLocation