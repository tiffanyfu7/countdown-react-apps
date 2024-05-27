import React, { useState } from 'react'
import SearchLocation from './SearchLocation'
import Info from './Info';

const Header = ({ location, setLocation, info, setInfo, settings, setSettings}) => {

    return (
        <>
            <div id="header" className="horizontal-display">
                <h1 id="title">Status Report</h1>
                <SearchLocation location={location} setLocation={setLocation} />
                <div>
                    <button onClick={() => setSettings(!settings)} className="info-button">S</button>
                    <button onClick={() => setInfo(!info)} className="info-button">?</button>
                </div>
            </div>
        </>
    )
}

export default Header