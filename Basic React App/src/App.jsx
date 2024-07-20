import { useState } from 'react';
import './App.css';


function App() {
  const [arr, setArr] = useState([]);
  const addItem = () => {
    console.log(arr);
    setArr([...arr, "fuck"]);
  }

  return (
    <div>
      {arr}
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default App;