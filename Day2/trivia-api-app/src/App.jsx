import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Main from './components/Main';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import InputNumber from 'rc-input-number';


function App() {
  const [data, setData] = useState([]);
  const [numQuestions, setNumQuestions] = useState(0);

  useEffect(() => {
    loadQuestions()
  }, []);
  
  function loadQuestions(num) {
    setNumQuestions(num);
    if (num) {
      axios
        .get(`https://opentdb.com/api.php?amount=${num}&difficulty=medium&type=boolean`)
        .then((data) => setData(data.data.results))
        .catch((error) => console.log(error));
    }
  }
  
  return (
    <>
      <h1>Trivia Time!</h1>
      <p>Input a Number of General Knowledge Questions</p>
      <InputNumber min={0} max={20} step={1} value={numQuestions} onChange={(val) => loadQuestions(val)} />
      
      <Main data={data} numQuestions={numQuestions} />
    </>
  )
}

export default App;