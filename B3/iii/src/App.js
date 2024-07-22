
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count,setCount]=useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={()=>{setCount(prev=>prev+1)}}>Click me</button>
    </div>
  );
}

export default App;
