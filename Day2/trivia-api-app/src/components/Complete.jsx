import React, { useState } from 'react';
import { Rating } from '@mui/material';

const Complete = ({correct, total}) => {
    const [rating, setRating] = useState(0);
    const stat = "Stats: " + correct + "/" + total;
    return (
        <div>
            <h2>Congratulations, You Completed the Trivia Questions!</h2>
            <h3>{stat}</h3>
            <p>Give this app a rating!</p>
            <Rating name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }} />
        </div>
    )
}

export default Complete