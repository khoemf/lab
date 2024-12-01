import React from "react";
import { useState, useEffect } from "react";

export default function Test2024113001() {

   /////////////////////////////////////////////////////////////////////////////////////////////
  //study Using Anonymous Functions vs Named Functions vs Arrow Functions as CALLBACK FUNCTION//
  ///////////////////////////////////////////////////////////////////////////////////////////// 

  let person = ["fai", "foon", "mary", "peter", "john", "susan"];



  useEffect(() => {}, []); // This runs only once after the initial render


  let displayTest1 = (aryVal, aryIndex, ary) => {
    return (
      <>By arrow function , pass function as argument: {aryIndex + 1}:: {aryVal}<br /></>
    );
  };

  let displayTest4 = function (aryVal, aryIndex){
    return (
      <>By anonymous function , pass function as argument: {aryIndex + 1}:: {aryVal}<br /></>
    );
  }

  function displayTest3(aryVal, aryIndex) {
    return (
      <>By Named function , pass function as argument: {aryIndex + 1}:: {aryVal}<br /></>
    );
  }
  

  let displayTest2 = (val) => {
    return (
      <>By anonymous function , pass function as argument , receive only one argument: {val}<br /></>
    );
  };

  return (
    <>
      Style : Display by <b>arrow function</b> , function declare inline, most use case
      <br />
      {person.map((aryVal, aryIndex, ary) => {
        return (
          <>Arrow function (declare inline) {aryIndex + 1}:: {aryVal}<br /></>
        );
      })}
      <hr />
      Style : Display by <b>anonymous function</b>, function declare inline (Traditional anonymous function)
      <br />
      {person.map(function (aryVal, aryIndex, ary) {
        return (
          <>Anonymous function (declare inline) {aryIndex + 1}:: {aryVal}<br /></>
        );
      })}


<hr />
      Style : Display by <b>named function</b> , function declare inline (traditional/classic one) 
      <br />
      {person.map( function displayTest3(aryVal, aryIndex) {
    return (
      <>By Named function (declare inline) : {aryIndex + 1}:: {aryVal}<br /></>
    );
  })}      




      <hr />
      Style : Display by <b>anonymous function</b> , pass function as argument
      <br />
      {person.map(displayTest4)}

      <hr />
      Style : Display by <b>arrow function</b> , pass function as argument
      <br />
      {person.map(displayTest1)}

      <hr />
      Style : Display by <b>named function</b> (traditional/classic one) , pass function as argument
      <br />
      {person.map(displayTest3)}      


      <hr />
      Style : Display by <b>arrow function</b> , function only with one argument
      <br />
      {person.map(displayTest2)}

      <hr />
      Style : Display by <b>arrow function</b>, function declare inline 
      <br />
      {
        //study Note: although define variable as index $aryIndex, but it still assign with array value by map function
      person.map( (aryIndex) => {
        return (
          <>Arrow function inline (receive only one variable) {aryIndex}<br /></>
        );
      })}

      <hr />
      Style : Display by arrow function , but syntax error
      <br />
      {
        //Study Note: the following does not work
        //with error aryVal,aryIndex, ary does not found
        //person.map(displayTest1(aryVal,aryIndex, ary))
      }
      

    </>
  );
}
