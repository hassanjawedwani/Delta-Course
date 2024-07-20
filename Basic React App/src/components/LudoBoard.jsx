import React, { useState } from 'react'

export default function LudoBoard() {
  const [counters, setCounters] = useState({
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0,
  });

  const updateBlue = () => {
    console.log(counters);
    setCounters((prevValue) => {
      return {...prevValue, blue: prevValue.blue+1 }
    });
  }


  return (
    <div>
     <div style={{backgroundColor: "blue"}}>
        <p>Blue Count: {counters.blue}</p>
        <button onClick={updateBlue}>+1</button>
     </div>
     <hr/>
     <div style={{backgroundColor: "yellow"}}>
        <p>Yellow Count: {counters.yellow}</p>
        <button>+1</button>
     </div>
     <hr/>
     <div style={{backgroundColor: "red"}}>
        <p>Red Count: {counters.red}</p>
        <button>+1</button>
     </div>
     <hr/>
     <div style={{backgroundColor: "green"}}>
        <p>Green Count: {counters.green}</p>
        <button>+1</button>
     </div>
     <hr/>
    </div>
  );
}
