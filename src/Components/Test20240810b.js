import React, { useState } from 'react'

//reference: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659790#search


//notes: useState update toggle value
export function Test20240810bInputScreen({initialName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName)
  function handleIsEditingOnClick(){
    setIsEditing((preVal)=>{return !preVal})
  }

  function handleNameOnChange(event){

    //notes: calling handleNameOnChange without passing any $event to this function
    //when calling handleNameOnChange, React will give the event object as an argument for this function by default
    //so, the function gets the $event automatically

    setName(event.target.value)
  }
  let htmlUserNameInput = <span>{name}</span>

  if(isEditing){
    htmlUserNameInput = <input type="text" value={name} onChange={handleNameOnChange}/>
  }

  return (
    <>
    <b>User Namess</b>: {htmlUserNameInput}&nbsp;
    <button onClick={handleIsEditingOnClick}> {isEditing? 'Update':'Edit'}</button>
    <br/>
    <br/>
    <b>Extra display User Name</b> : {name}  <br/>
    (for knowing the <b>name</b> change value )
    </>
  );
}

export default function Test20240810b() {
  return (    
    <>
    <br/>
    <Test20240810bInputScreen initialName='Foon'/>
    <br/>
    </>
  )
}
