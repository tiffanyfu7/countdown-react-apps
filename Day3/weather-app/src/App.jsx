import './App.css'
import Top from './Top'

export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  return (
    <>
      <Top />
    </>
  )
}

export default App