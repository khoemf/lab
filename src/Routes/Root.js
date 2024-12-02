import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div></div>
        <nav>
          <ul>
            <li>
              <Link to="/App">App.js</Link>
            </li>
            <li>
              <Link to={`contacts/1`}>Your Name Testing</Link>
            </li>
            <li>
              <Link to={`list-product`}>List-Product</Link>
            </li>
            <li>
              <Link to={`testForm`}>Test Form</Link>
            </li>
            <li>
              <Link to={`testUseRef`}>Test User Ref</Link>
            </li>
            <li>
              <Link to={`sideBar`}>Side Bar</Link>
            </li>
            <li>
              <Link to={`testList`}>Test List</Link>
            </li>
            <li>
              <Link to={`testAppBar`}>Test App Bar</Link>
            </li>
            <li>
              <Link to={`testBrootstrap20240213`}>BootStrap 20240213</Link>
            </li>
            <li>
              <Link to="/newindex1">New Index page 1</Link>
            </li>
            <li>
              <Link to="/Menu20240225">Menu20240225</Link>
            </li>
            <li>
              <Link to="/TestForm20240512">TestForm20240512</Link>
            </li>
            <li>
              <Link to="/TestForm202405122244">TestForm202405122244</Link>
            </li>
            <li>
              <Link to="/TestForm20240513">TestForm20240513</Link>
            </li>
            <li>
              <Link to="/Axios20240515">Axios20240515 + UseRef</Link> (Get Input
              by useRef vs useState)
            </li>
            <li>
              <Link to="/TestUseRef20240515">TestUseRef20240515</Link>
            </li>
            <li>
              <Link to="/TestForm20240515">TestForm20240515</Link>
            </li>
            <li>
              <Link to="/Test20240520">Test20240520</Link>
            </li>
            <li>
              <Link to="/Test20240727">Test20240727</Link> (Conditional Rending)
            </li>
            <li>
              <Link to="/Test20240803">Test20240803</Link> (Display API
              return,conditional rending)
            </li>
            <li>
              <Link to="/Test20240804">Test20240804</Link> Call API function
              <b>coding</b> style in useEffect(), with a prefer run and declare useEffect style
            </li>
            <li>
              <Link to="/Test2024080402">Test2024080402</Link> (base on
              Test20240804, handle display API return data, with $isLoading)
            </li>
            <li>
              <Link to="/Test2024080403">Test2024080403</Link> (base on
              Test2024080402, <b>rendering</b> with{" "}
              <b>
                "Immediately Invoked Function Expressions" {`{(() =>{})()}`}
              </b>
              ) inside <b>return()</b>
            </li>
            <li>
              <Link to="/Test2024080404">Test2024080404</Link>
              <ol>
                <li>
                  base on Test2024080403, conditional rendering components
                </li>
                <li>
                  Store final display in variable <b>$display</b>. Conditional
                  calculate value of $display <b>outside</b> return()
                </li>
                <li>
                  With <b>With Object Destructuring Alias</b> (normal use
                  Test2024080404ShowData())
                </li>
                <li>
                  <b>Two components</b> in a single file
                </li>
              </ol>
            </li>
            <li>
              <Link to="/Test2024080405">Test2024080405</Link> Conditional
              Rendering 2 : Logical <b>&& ||</b> Operator
            </li>

            <li>
              <Link to="/Test20240807">Test20240807</Link>
              <ol>
                <li>useState: <b>mutable / immutable / update previous value</b>. </li>
                <li><b>get Form Input</b> by useRef</li>
                <li>Add a single item to array and display it</li>
                <li>Remove a single array item (by array <b>filter</b>)and save the value to other array</li>
                <li>Join array by Using the <b>Spread Operator (…)</b></li>
                <li>call onClick function <b>with and without passing variable into the function</b></li>
              </ol>
              
            </li>

            <li><Link to="/Test20240810">Test20240810</Link>
              <ol>
                <li> Get <b>Form input</b> by build in js function <b>FormData()</b>, including get group of <b>checkbox html element</b></li>
                <li> attribute <b>htmlFor</b>  , special in react only , similar to<b> className</b></li>
                <li>Click the submit button and check result in CONSOLE.log</li>
              </ol>
            </li>

            <li>
              <Link to="/Test20240810a">Test20240810a</Link>
              <ol>
                <li>Demo Html Input text element. Using attribute <b>value</b> vs <b>defaultValue</b></li>
                <li>In console log, there is a warning is correct. Since value attribute is set. You may remove "value" and the warning will be removed</li>
              </ol>
            </li>


            <li>
              <Link to="/Test20240810b">Test20240810b</Link>
              <ol>
                <li>Show <b>toggle</b> display and edit mode effect</li>
                <li>Demo the technique  of <b>Two-Way-Binding</b></li>
                <li>input type = text, onChange().  React will <b>give</b> the <b>event object</b> as an argument to onChange() <b>by-default</b>
                , so, the function gets the $event automatically</li>
                <li>this default passing $event seems only work for type of <b>INPUT</b> only. Need to test whether it works in <b>BUTTON</b></li>
                
              </ol>
            </li>
            
            <li><Link to="/Test20240818">Test20240818</Link>
              <ol>
                <li>Passing $children as a magic / default props variable into a component</li>
                <li>Learn passing $...props (Rest Property) inside components </li>
                <li>Reference : udemy : 65. Problem: Props Are Not Forwarded To Inner Elements</li>
                
              </ol>
            </li>
            <li><Link to="/Test20241130">Test20241130</Link>
            <ol>
                <li>Never  updates state out of event handler or useEffect, other it cause "Too many re-renders"</li>
                <li>study declaring Anonymous Functions vs Named Functions vs Arrow Functions</li>                
                <li>Style: named function (traditional/classic one)</li>
                <li>Style: anonymous function (Traditional anonymous function)</li>
                <li>Style: arrow function</li>
                <li>Style: arrow function , one line only , more than one argument</li>
                <li>Style: arrow function   one argument , one statement</li>
                <li>Style: arrow function, without argument</li>
                <li>Style: anonymous function , inline function</li>
                
              </ol>
            </li>
            <li><Link to="/Test2024113001">Test2024113001</Link>
                    <ol>
                      <li>Base on exercise <b>Test20241130</b></li>
                      <li>Study using Anonymous Functions , Named Functions,  Arrow Functions in <b>Callback</b> function</li>
                      <li>Using array.map() to test</li>
                      <li>Study Note: 
                        <ol>
                          <li>Since array.map() receive a <b>function</b> as the variable/argument, 
                            so you may declare a function either by arrow , anonymous , named to a $variable. 
                            Then pass the $variable into map(). It works because the data type for the $variable is a "<b>function</b>".
                            </li>
                            <li>
                            But it only needs to pass the $variable to map() only, no need to consider how to pass array value to the $variable ,  
                            the $variable receive array value/argument by map() with AUTO. You cannot set to the variable.
                            "The argument pass to $variable" seems is the special handling in <b>CALLBACK</b> function
                            </li>
                        <li>it can pass Anonymous Functions, Named Functions, Arrow Functions in Callback function</li>
                        <li>it can pass the three type function as argument (declare the funciton) into map()</li>
                        </ol>
                        </li>
                    </ol>
            </li>
            Test2024120101
            <li><Link to="/Test20241201">Test20241201</Link>
            <ol>
              <li>Study JS CALLBACK Mechanism</li>
              <li>Write a function to receive callback function , and call the callback function</li>
            <li>Base on exercise <b>Test2024113001</b></li>
            <li>Study Points is how to pass argument to a callback function, <br/>how to know the calling function will pass how many argument into the callback function</li>
            <li>The point is if you declare a callback function, you no need to pass argument in the calling sytax.</li>
            <li>Passing argument to the callback is done by the first calling function by auto</li>
            <li>You may check with <b>mainFunction</b> in Test20241201</li>
            <li><b>mainFunction</b> do the argument assigment to the callback function , the magic is inside it</li>
            </ol>
            </li>

            
            <li><Link to="/Test2024120101">Test2024120101</Link>
                    <ol>
                      <li>Study promise, async , await</li>
                      <li>Study Point: 
                          <ol>
                          <li>await return a PROMISE object</li>
                          <li>If a function with a await function inside it, the function should have async</li>
						  <li>Also study callback return value in each function (how to return, receive)</li>
                          </ol>
                          
                      </li>
                    </ol>
            </li>

          </ul>
        </nav>
        <br/><br/>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
