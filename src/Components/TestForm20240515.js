import { Button } from "bootstrap";
import React from "react";
import { useState, useRef } from "react";

export default function TestForm20240515() {
  const txtNoOfInputRef = useRef(null);

  const [noOfInput, setNoOfInput] = useState("Dummy Text");

  const handleAddInput = () =>{
    setNoOfInput(txtNoOfInputRef.current.value);
  }

  return (
    <>
      <h1>Testing for Input dynamic input</h1>
      <br/>
      This update the display by not using onChange()<br/>
      <br />
      Key in your text / number:{" "}
      <input type="text" name="txtNoOfInput" defaultValue={noOfInput} ref={txtNoOfInputRef} />
      <br />
      <button name="Add" onClick={handleAddInput}>Refresh</button>
      <hr />
      <b>What value have you input</b> : {noOfInput}
    </>
  );
}
