import React from 'react'

export default function TestForm202405122244() {

    function handleClick() {
        alert('You clicked me!');
      }

  return (
    <>
    User Name:<input type="text" name="UserName" value="明輝"/><br/><br/>
    Aage : <input type="text" name="age" value = "100"/>&nbsp;&nbsp;
    <input type="submit" name="cmdSubmit" value="submit" onClick={handleClick}/>

    </>
  )
}
