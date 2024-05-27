import React, { useState } from 'react'
import Category from './Category';
import Answers from './Answers';
import Question from './Question';
import { Rating } from '@mui/material';

const QuestionCards = ({ data, answered, setAnswered, numCorrect, setNumCorrect }) => {
    /*
    data is array of objects
    each objects contains six keys
    {[type: string], [difficulty: string], [category: string], [question: string], 
    [incorrect: string], [correct: string],}
    */
    const prop = data;
  
    return (
    <>            
        {prop.map((obj) => (
            <div>
              <Category key={2} cat={Object.values(obj)[2]} />
              <Question key={1} q={Object.values(obj)[3]} />
              <Answers
                key={3}
                correctAns={Object.values(obj)[4]}
                answered={answered}
                setAnswered={setAnswered}
                numCorrect={numCorrect}
                setNumCorrect={setNumCorrect}
              />
            </div>
          )
        )}
    </>
  )
}

export default QuestionCards