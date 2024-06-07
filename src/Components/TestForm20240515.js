import { Button } from "bootstrap";
import React from "react";
import { useState, useRef } from "react";

export default function TestForm20240515() {
  const txtNoOfInputRef = useRef(null);

  const [noOfInput, setNoOfInput] = useState("--");

  const handleAddInput = () =>{
    setNoOfInput(txtNoOfInputRef.current.value);
  }

  return (
    <>
      <h1>Testing for adding dynamic input</h1>
      <br />
      Number of element that you want to add:{" "}
      <input type="text" name="txtNoOfInput" ref={txtNoOfInputRef} />
      <br />
      <button name="Add" onClick={handleAddInput}>Add</button>
      <hr />
      Request Number of new Element : {noOfInput}
    </>
  );
}
