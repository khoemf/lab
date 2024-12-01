import React from 'react'
import { useState,useEffect} from "react";

export default function Test20241130() {
  /////////////////////////////////////////////////////////////////////////////
  //study declaring Anonymous Functions vs Named Functions vs Arrow Functions//
  /////////////////////////////////////////////////////////////////////////////

  //reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  const [strText, setStrText] = useState(null);

  //Style : named function (traditional/classic one)
  function addNumber(num1 , num2, num3){
    let sum = num1 + num2 + num3;
    return sum;
  }


  //Style : anonymous function (Traditional anonymous function)
  let addNumber_anonymous = function (num1 , num2, num3){
    let sum = num1 + num2 + num3;
    return sum;
  }

  //Style: arrow function, without argument
  let addNumber_noArg = () =>{return 1 + 10};
  let addNumber_noArg2 = () => {console.log("fai")}
  let addNumber_noArg3 = () => {let a = 1 + 10; return a}
  let addNumber_noArg4 = () => 1 + 10  //<-- implit return 11,  no {} , can ommit return , 

  //Study point : the follow declaration does not correct
  //let addNumber_noArgError = () => {1 + 10}  //<-- with {} , ommit return not allow 
  //() => {1+10} equals to 
  /*  // the following function declaration return error
   function abc(){
    1 + 10;
  }
  */
  

  //Style: arrow function  , with argument
  let addNumber_arrow =  (num1 , num2, num3) => {
    let sum = num1 + num2 + num3;
    return sum;
  }

  //Style: arrow function , one line only , more than one argument
  //Study Point : if the function body has one statement, omitting the following
  //              -->  block curly brackets {}
  //              -->  return
  let addNumber_arrow2 =  (num1 , num2, num3) => num1 + num2 + num3

  //Style: arrow function 
  // Study Point: if the function body has one argument , one statement, omitting the following  
  //              -->  the arguments parenthesis ()
  //              -->  block curly brackets {}
  //              -->  return
  let addNumber_arrow2_oneArg =  num1  => num1 + 10
    
  //Study Point : never  updates state out of event handler or useEffect, other it cause "Too many re-renders"
  //setStrText(addNumber(1, 2, 3));

  useEffect(() => {

    //Study Point: Ensure state updates are only called in event handlers or useEffect.
    //setStrText(addNumber(1, 2, 3));

    //setStrText(addNumber_anonymous(2,3,4))

    //setStrText(addNumber_arrow(3,3,4))

    //setStrText(addNumber_arrow2(2,5,5))
    //setStrText(addNumber_arrow2_oneArg(5))

    //Style: anonymous function , inline function
    setStrText(function (num1 , num2, num3)  {
      let sum = num1 + num2 + num3;
      return sum;
    }( 1, 2, 7))
       
  }, []); // This runs only once after the initial render

  return (
    <>
    Sum Value is {strText} !    
    </>
  )
}
