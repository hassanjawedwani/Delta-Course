import React, { useState } from 'react';
import './Lottery.css';

export default function Lottery() {
  const [numbers, setNumbers] = useState({
    first: 0,
    second: 0,
    third: 0

  });
  const [sum, setSum] = useState(0);

 

  const handleStart = () => {
    setNumbers((prevNumbers) => {
      return {
        ...prevNumbers,
        first: Math.floor(Math.random() * 10),
        second: Math.floor(Math.random() * 10),
        third: Math.floor(Math.random() * 10),
      }
    });
  }


  const sumArray = (arr) => {
   let s = 0;
    for (const el in numbers ) {
      s += numbers[el]
    }
    return s;
    
  }

  let isWinning = sumArray(numbers) === 15;

  return (
    <div className='lottery-container'>
      <div className="lottery">
        <h1>Lottery Game</h1>
        <div className="lottery-numbers">
          <div id="first" className='lottery-number'>{numbers.first}</div>
          <div id="second" className='lottery-number'>{numbers.second}</div>
          <div id="Third" className='lottery-number'>{numbers.third}</div>
        </div>
        <button className="start-button" onClick={handleStart}>Start</button>
        <div className='output'>
          {isWinning === true ? <h3>You Won the Lottery 🎉</h3> : <h3>Try Again 🔃</h3> }
        </div>
      </div>
    </div>
  )
}