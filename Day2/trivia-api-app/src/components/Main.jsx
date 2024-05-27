import React, { useState } from 'react'
import QuestionCards from './QuestionCards'
import { Rating } from '@mui/material';
import Complete from './Complete';

const Main = ({ data, numQuestions }) => {
  const [answered, setAnswered] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  return (
    <>
      <QuestionCards
        data={data}
        answered={answered}
        setAnswered={setAnswered}
        numCorrect={numCorrect}
        setNumCorrect={setNumCorrect}
      />
      {answered == numQuestions &&
        <Complete correct={numCorrect} total={numQuestions} />
      }
    </>
  )
}

export default Main