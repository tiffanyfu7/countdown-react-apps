import React from 'react'
import Draggable from 'react-draggable';

const Info = ({info, setInfo}) => {
  return (
    <div className='pop-up'>
      <div className="toolbar">
        <button className="exit-button"
          onClick={() => setInfo(!info)}> x
        </button>
      </div>
      <h2>Welcome To Status Report!</h2>
      <p>Enter a City to get Started</p>
      <img src="hurricane.gif" />
      <br></br>
      <a href="https://tiffanyfu.me" target="_blank">TIFFANY FU © 2024</a>
    </div>
  )
}

export default Info