
import './App.css';
import React from 'react';

const App=()=> {
  const [count,setCount]=React.useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={()=>{setCount(prev=>prev+1)}}>Click me</button>
    </div>
  ); 
}
export default App;