import React from 'react'
import { useState,useRef } from "react";

export default function TestUseRef20240515() {
    const inputRef = useRef(null);

    const [updated, setUpdated] = useState('');
  
    const handleClick = () => {
      // 👇 "inputRef.current.value" is input value
      setUpdated(inputRef.current.value);
    };
  
    return (
      <div>
        <h1>Test useRef</h1>
        <input
          ref={inputRef}
          type="text"
          id="message"
          name="message"
        />
  
        <h2>Updated: {updated}</h2>
  
        <button onClick={handleClick}>Update</button>
      </div>
    );
}
