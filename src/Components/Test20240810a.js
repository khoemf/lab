import React, { useState } from 'react'

//reference: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659790#search


export default function Test20240810a() {
  return (    
    <>
    <br/>
    <b>Demo a wrong Input</b>: <input type="text" value="Value 123"/><br/>
    1) Check with the console log, there is a warning in brower!!!&nbsp;<br/>
    2) In React, if a input box with attribute <b>value</b>. You cannot update the input text by udpating the text value as normal html text behaviour.
    <br/>
    <br/>
    <b>Demo a correct one</b>: <input type="text" defaultValue="Value 123"/><br/>
    1) use <b>defaultValue </b> instead of <b>value</b>  (check in the react source code)
    <br/><br/>
    <hr/><hr/>
    
    <br/>
    </>
  )
}
