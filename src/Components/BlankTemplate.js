import React from 'react'
import {CORE_CONCEPTS} from '../data/data.js'
import { useState, useEffect} from "react";

export default function BlankTemplate() {

  const [variableA, setVariableA] = useState("fai");


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

  return (
    <>
    Hello World! Hello {variableA}!!
    </>
  )
}
