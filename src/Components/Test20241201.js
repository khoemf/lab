import React from 'react'
import { useState,useEffect} from "react";

export default function Test20241201() {
  
  /////////////////////////////////////////////////////////
  // Study Note: understand the JS CALLBACK how it works //
  /////////////////////////////////////////////////////////

  const [displayTxt, setDisplayTxt] = useState(null);

  let mainFunction = (num1 , num2, callBackFn)=>{
      let sum = num1 + num2;

      //Study Point: The magic to passing arugment by AUTO to the callback function is here
      //             The argument assignment to the callback function $callBackFn is done in the calling function $mainFunction
      callBackFn(num1, num2, sum);

      return sum;
  }

  let callBackFun1 = (val1, val2, sumVal)=>{
    console.log("in callBackFun1,  declare fun() ,receive 3 variable" ,val1,val2,sumVal)
  }

  let callBackFun2 = (val1)=>{
    console.log("in callBackFun2, declare fun() ,receive 1 variable" ,val1)
  }

  let callBackFun3 = function (val1, val2, sumVal){
    let all = val1 +  val2 + sumVal;
    console.log("in callBackFun3,  declare fun() , sum all value" ,all)
  }

  useEffect(() => {    

    let abc = 0;

    //by arrow
    abc = mainFunction(3,49,(val1, val2, sumVal) =>console.log("By inline arrow fun()",val1,val2,sumVal));

    //by anonymous
    abc = mainFunction(3,49,function (val1, val2, sumVal){console.log("BY inline anonymous fun()",val1,val2,sumVal)});

    //by named
    abc = mainFunction(3,49,function callBackFunWithName (val1, val2, sumVal){console.log("BY inline Named fun()",val1,val2,sumVal)});

    //Study Point: *) Below syntax, you no need to pass 3 argument into $callBackFun1
    //             *) The key point is declaring the $callBackFun1 need to receive 3 argument
    //             *) So , declareing a callback function, it needs to consider pass how many argument into it
    abc = mainFunction(3,49, callBackFun1);


    //by arrow, $callBackFun2 only receive 1 variable
    abc = mainFunction(3,49, callBackFun2);

    //Study Point: 玩野ONLY, Demo i understand the callback mechanism, call other callback which do other thing
    abc = mainFunction(3,49, callBackFun3);

    //Study Point: 玩野ONLY, Demo i understand the callback mechanism
    abc = mainFunction(3,49,() =>console.log("fai"));

    setDisplayTxt(abc);
  }, []); // This runs only once after the initial render
  

  return (
    <>
    Display the value here <b>{displayTxt}</b> !<br/>
    <br/>
    Open console to see the log.
    
    </>
  )
}
