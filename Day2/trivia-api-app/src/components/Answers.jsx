import React, { useState } from 'react'

const Answers = ({ correctAns, answered, setAnswered, numCorrect, setNumCorrect }) => {
    let choices = ["True", "False"];

    const [bgColor, setBgColor] = useState('#bababa');
    const [selected, setSelected] = useState(false);

    const onAnswerSelected = (answer) => {
        setAnswered(answered + 1);
        if (!selected && answer.choice === correctAns) {
            setSelected(true);
            setBgColor('#9dbf93');
            setNumCorrect(numCorrect + 1);
        } else if(!selected) {
            setSelected(true);
            setBgColor('#b37f7f');
        }
    }

    return (
        <>
            {choices.map((choice) => (
                <button key={choice} onClick={() => onAnswerSelected({ choice })} style={{ background: bgColor, marginRight: "1em" }} > {choice} </button>
            ))}
        </>
    )
}

export default Answers