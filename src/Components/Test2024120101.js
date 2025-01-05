import { DoDisturbOff } from '@mui/icons-material';
import React from 'react'
import { useState,useEffect} from "react";

export default function Test2024120101() {
  
  ///////////////////////////////////////////////////////
  //Study Promis, async , await //
  //start with check the        //
  //   doStuffAsUsual();        //
  //   doStuffWithPromise();    //
  //   doStuffWithAsyncAwait(); //
  // Also study callback return value in each function //
  ///////////////////////////////////////////////////////

  const [textA , setTextA] = useState("Hello World!!!");

  
  useEffect(() => {        
  
    const functionAA = (num)=>{
		console.log("in functionAA!! Receive Num :: "+num)
		return num;
	}
    const functionBB = (num)=>{
	  console.log("==> start functionBB!! Receive Num :: " +num)
      functionAA(num);
      console.log("==> Exit functionBB!! Receive Num :: " +num)
    }

    const waitFunctionAA = ()=>{

      let waitSec = 2;
      let actualWait = waitSec * 1000;
  
      console.log("waitFunctionA ==> Inside  start wait " + waitSec +" second.");
      setTimeout(() => {
        console.log("waitFunctionA ==> Delayed after "+ waitSec +" second .");
      }, actualWait);
      
	  return waitSec;
    }

    //Study Point: If declare a function with Promise
    //             -- you must create a new promise and return it
    //             -- reference with promiseFunctionAutoExecute() is a wrong declaration style
    const waitFunctionWithPromise = (waitSec) =>{
        return  new Promise((resolve,reject)=>{
          //let waitSec = 1;
          let actualWait = waitSec * 1000;
      
          console.log("waitFunctionWithPromise ==> Inside  start wait " + waitSec +" second.");
          setTimeout(() => {
            console.log("waitFunctionWithPromise ==> Delayed after "+ waitSec +" second .");
            //resolve("resolve in waitFunctionWithPromise")

            //Tell the Promise object , in this case, the promise can be claimed as "RESOLVE"
            resolve(actualWait);
          }, actualWait);
        })
    
    }

    //Study Point: If declare promise like this, it will auto execute by useEffect(), 
    //             even you don't call it. (e.g by promiseFunctionAutoExecute())
    /*
    const promiseFunctionAutoExecute = new Promise((resolve,reject) => {
      console.log("inside temptempPP");
      resolve();
    })
    */

    const doStuffAsUsual = function(){
      //below function does not wait , promise, async
      let num1 = waitFunctionAA();
      functionAA(num1);
      functionBB(num1);
      
    }

    const doStuffWithPromise = function(){
      //below function with Promise
      //Study Point: apply the then() should be base on waitFunctionWithPromise().then() , 
      //             -- not waitFunctionWithPromise.then() [ no () after waitFunctionWithPromise]
      //             -- with promise, it must use then() to assign the next function/action
      //             -- Important, in the then(), then() should receive a function variable, 
      //             -- so, it should pass () =>{} into then() [i.e. () =>{waitFunctionWithPromise(3).then()}]
      //             -- not waitFunctionWithPromise(3)
      
      //Study Point: waitFunctionWithPromise() will return a variable , it assign to $functionAA by auto
      waitFunctionWithPromise(2).then(
        () =>{
          waitFunctionWithPromise(3).then(functionAA).then(functionBB)
        }
      );
      
    }
    
    const doStuffWithAsyncAwait = async function(){
      //reference : https://www.explainthis.io/zh-hant/swe/async-await

      //study Point: 在異步函式中，使用 await 等待 Promise 的完成，並直接返回結果。
      //            -- that's why waitFunctionWithPromise() should return a Promise Object
      //            -- compare with execute order in doStuffWithPromise() , below is more readable
      try{
        let num1 = await waitFunctionWithPromise(2);
        let num2 = await waitFunctionWithPromise(3);
        functionAA(num1);
        functionBB(num2);
      }catch(error){
        console.log(error);
      }
    }

   

    //Study Point: Never execute multiple function in useEffect(), 
    //           -- try to pack all your fuction into one funciton 
    //           -- and useEffect() only execute one function


    //test the result by running the following fuction one by one (by comment out)

    //doStuffAsUsual();
    //doStuffWithPromise();
    doStuffWithAsyncAwait();

  }, []); // This runs only once after the initial render

  return (
    <>
    
    <br/>
    Open Console to check the log display order.
    

    </>
  )
}
