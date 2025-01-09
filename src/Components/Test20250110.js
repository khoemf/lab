import React from 'react'
import {CORE_CONCEPTS} from '../data/data.js'
import { useState, useEffect} from "react";

export function ThisInputUI({handleUpdateUI}) {
  return (
    <>
      <form>
        User Name: <input type="text"/><br/>
        Age: <input type="text"/><br/>
        <br/>
        <button type="button">Add This Record. (no action now)</button><br/><br/>

        {
          //study Point:
          //in <ThisInputUI> , it call function handleDisplayUI, 
          //in order to pass value 2 into this function , it needs to use arrow function syntax
        }
        <button type="button" onClick={() => handleUpdateUI(2)}>Cancel</button><br/>
      </form>
    </>
  );
}

export function ThisNoUserYet({handleUpdateUI}){
  return (
    <>
    There is no user added before!!<br/>
    <button onClick={() => handleUpdateUI(1)}>Press to Add Record LA!!!</button>
    </>
  );
}

export default function Test20250110() {

  const [applicationStatus, setApplicationStatus] = useState({
    status:"WAIT_FOR_INPUT"
  });


  //Prefer use this style for long term 20240804
  const doSomethingInUseEffect = async () => {
    try {
      
    } catch (error) {
      
    } finally{
      
    }
 
  };
  
 useEffect(() => {
  doSomethingInUseEffect();
  }, []);  

  function handleDisplayUI(requstStatus){

    let _status = null;

    if(requstStatus ===1){
      _status = "SHOW_UI_FOR_INPUT"
    }else if(requstStatus ===2){
      _status = "WAIT_FOR_INPUT" 
    }

    setApplicationStatus(prevState =>{
      return {
        ...prevState,

        status: _status,
      };
    });
  }

  let displayUI = null;
  console.log("applicationStatus " +applicationStatus.status)
  if(applicationStatus.status === "SHOW_UI_FOR_INPUT"){
    {
      //study Point:
      //in <ThisInputUI> , it call function handleDisplayUI, 
      //variable pass to this funciton handle in component <ThisInputUI>
    }
    displayUI = <ThisInputUI handleUpdateUI={handleDisplayUI}/>;
  }else if (applicationStatus.status === "WAIT_FOR_INPUT"){
    {
      //study Point:
      //in <ThisNoUserYet> , it call function handleDisplayUI, 
      //variable pass to this funciton handle in component <ThisNoUserYet>
    }
    displayUI = <ThisNoUserYet handleUpdateUI={handleDisplayUI}/>;
  }
  return (
    <>
    {
      //study Point:
      //call a onClick function with passing value 1
      //it needs to use arrow function syntax
      //since it needs to pass a variable with function type into the onClick Props
      //so, it can receive onClick={handleDisplayUI}            // $handleDisplayUI already define as a function object 
      //        or         onClick={() => handleDisplayUI(1)}   // arrow function in this syntax , the object inside {} is a declration of fuction object
    }
    <button onClick={() => handleDisplayUI(1)}>+ Add Record</button>
    <hr/>
    {displayUI}
    </>
  )
}


