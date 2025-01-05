import { DoDisturbOff } from '@mui/icons-material';
import React from 'react'
import { useState,useEffect} from "react";

export function MyButton({count, onClick}){
  
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function Test20241226() {
  
  const [count , setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  useEffect(() => {        
  
    

  }, []); // This runs only once after the initial render

  return (
    <>
    
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <br/><br/>
      <MyButton count={count} onClick={handleClick} />
    </div>
    

    </>
  )
}
