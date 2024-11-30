import React from 'react'
import { useState,useEffect} from "react";

export default function Test20241130() {
  ///////////////////////////////////////////////////////////////////
  //study Anonymous Functions vs Named Functions vs Arrow Functions//
  ///////////////////////////////////////////////////////////////////

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

  //Style: arrow function
  let addNumber_arrow =  (num1 , num2, num3) => {
    let sum = num1 + num2 + num3;
    return sum;
  }

  //Style: arrow function , one line only
  //Study Point : if the function body has one statement, omitting the following
  //              -->  the arguments parenthesis ()
  //              -->  block curly brackets {}
  //              -->  return
  let addNumber_arrow2 =  (num1 , num2, num3) => num1 + num2 + num3

  // only one argument $num1 --> omitting the arguments parenthesis ()
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
