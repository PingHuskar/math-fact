import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [number, setNumber] = useState(`2`)
  const [fact, setFact] = useState(``)
  const [factNum, setFactNum] = useState(``)
  function GetMathFact() {
    const options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${number}/math`,
        params: {
          fragment: 'true',
        json: 'true'
      },
      headers: {
        'X-RapidAPI-Key': '80724f07f0msh7625ce68ef3a5b7p1ece7bjsna91097439c30',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };
    axios.request(options)
    .then((res) => res.data)
    .then(data => {
      console.log(data)
      setFact(data.text)
      setFactNum(data.number)
    })
  }
  return (
    <>
      {factNum && 
        <h2>{factNum}</h2>
      }
      {fact && 
        <p>{fact}</p>
      }
      <input type="text" name="" id="" value={number} onChange={(e) => {
        e.preventDefault()
        if (e.currentTarget.value) {
          setNumber(e.currentTarget.value!)
        }
      }} />
      <button onClick={GetMathFact}>Get {number} Fact</button>
    </>
  )
}

export default App
