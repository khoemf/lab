import React from "react";
//reference: https://kinsta.com/blog/react-conditional-render/
// -- Using Logical AND and OR Operators for Conditional Rendering

//reference: https://www.geeksforgeeks.org/javascript-logical-and-assignment-operator/

//reference: https://www.w3schools.com/js/js_assignment.asp
/*
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)
 */

export function Test2024080405DefaultLayout(){
  return <div>Test2024080405DefaultLayout</div>;
}

//reference: https://react.dev/learn/conditional-rendering
export function Test2024080405Component1() {
  return <div>Test2024080405Component1</div>;
}

export function Test2024080405Component2() {
  return <div>Test2024080405Component2</div>;
}
export function Test2024080405Component3() {
  return <div>Test2024080405Component3</div>;
}
export function Test2024080405Component4() {
    return <div>Test2024080405Component4</div>;
  }
  export function Test2024080405ComponentOther() {
    return <div>Test2024080405ComponentOther</div>;
  }

  export function Test2024080405IsLogin() {
    return <div>IsLogin in Test2024080405IsLogin()</div>;
  }
  export function Test2024080405NoLogin() {
    return <div>NoLogin in Test2024080405NoLogin()</div>;
  }

  export function Test2024080405ShowIfFalse() {
    return <div>ShowIfFalse</div>;
  }

export default function Test2024080405() {

  const isLogin = true;  
  const blVal = false;

  let switchResultDisplay = null;
  const switchDummyVal  = 5;
  switch (switchDummyVal) {
    case  "1":
        switchResultDisplay =   <Test2024080405Component1  />;
    case  "2":
        switchResultDisplay =   <Test2024080405Component2  />;
    case  "3":
        switchResultDisplay =   <Test2024080405Component3  />; 
    case  "4":
        switchResultDisplay =   <Test2024080405Component4  />; 
    default:
        switchResultDisplay =   <Test2024080405ComponentOther  />;
   }
    

  return (
    <>
        Check with the followings case, view the jsx source code<br/><br/>
        {
            //When you don’t need the else branch, you can also use a shorter logical && syntax:
            //The Logical AND assignment operator is used between two values.
            //If the first value is true, the second value is assigned.
            isLogin && <Test2024080405Component1/>
        }
        <br/>
        {
          //if $isLogin = true , display Test2024080405IsLogin
          //if $isLogin = false , display Test2024080405NoLogin
          isLogin?<Test2024080405IsLogin/>:<Test2024080405NoLogin/>
        }
        <br/>
        {
            
            //The Logical OR assignment operator is used between two values.
            //If the first value is false, the second value is assigned.
            
            //If the value is false , show the component
            blVal || <Test2024080405ShowIfFalse/>
        }
        <br/>
        {switchResultDisplay}
        
    </>
  );
}
