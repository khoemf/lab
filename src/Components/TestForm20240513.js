import React from 'react'
import { useState } from 'react';

//reference: https://www.freecodecamp.org/news/build-dynamic-forms-in-react/

export default function TestForm20240513() {

    const [age, setAge] = useState(28);
    const [name, setName] = useState('明輝');

    function handleClick() {
        alert('You clicked me!');

      }

      const handleInputChange = (event) => {
        setName(event.target.value);
      };

  return (
    <>
    User Name:<input type="text" name="UserName" value={name} onChange={handleInputChange}/><br/><br/>
    Aage : <input type="text" name="age" value = "100"/>&nbsp;&nbsp;
    <input type="submit" name="cmdSubmit" value="submit" onClick={handleClick}/><br/>
    Your Input Name is {name}.

    </>
  )

}
