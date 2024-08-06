import { Outlet ,Link } from "react-router-dom";
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            
          </div>
          <nav>
            <ul>
              <li><Link to='/App'>App.js</Link></li>
              <li><Link to={`contacts/1`}>Your Name Testing</Link></li>
              <li><Link to= {`list-product`}>List-Product</Link></li>
              <li><Link to= {`testForm`}>Test Form</Link></li>
              <li><Link to= {`testUseRef`}>Test User Ref</Link></li>
              <li><Link to= {`sideBar`}>Side Bar</Link></li>
              <li><Link to= {`testList`}>Test List</Link></li>
              <li><Link to= {`testAppBar`}>Test App Bar</Link></li>              
              <li><Link to= {`testBrootstrap20240213`}>BootStrap 20240213</Link></li>
              <li><Link to='/newindex1'>New Index page 1</Link></li>
              <li><Link to='/Menu20240225'>Menu20240225</Link></li>
              <li><Link to='/TestForm20240512'>TestForm20240512</Link></li>
              <li><Link to='/TestForm202405122244'>TestForm202405122244</Link></li>
              <li><Link to='/TestForm20240513'>TestForm20240513</Link></li>
              <li><Link to='/Axios20240515'>Axios20240515 + UseRef</Link> (Get Input by useRef vs useState)</li>
              <li><Link to='/TestUseRef20240515'>TestUseRef20240515</Link></li>
              <li><Link to='/TestForm20240515'>TestForm20240515</Link></li>
              <li><Link to='/Test20240520'>Test20240520</Link></li>              
              <li><Link to='/Test20240727'>Test20240727</Link> (Conditional Rending)</li>
              <li><Link to='/Test20240803'>Test20240803</Link> (Display API return,conditional rending)</li>
              <li><Link to='/Test20240804'>Test20240804</Link> (Call API function <b>coding</b> style in useEffect())</li>
              <li><Link to='/Test2024080402'>Test2024080402</Link> (base on Test20240804, handle display API return data, with $isLoading)</li>
              <li><Link to='/Test2024080403'>Test2024080403</Link> (base on Test2024080402, <b>rendering</b> with <b>"Immediately Invoked Function Expressions" {`{(() =>{})()}`}</b>) inside <b>return()</b></li>
              <li><Link to='/Test2024080404'>Test2024080404</Link>
                  <ol>
                    <li>base on Test2024080403, conditional rendering components</li>
                    <li>Store final display in variable <b>$display</b>. Conditional calculate value of $display <b>outside</b> return()</li>
                    <li>With <b>With Object Destructuring Alias</b> (normal use Test2024080404ShowData())</li>
                    <li><b>Two components</b> in a single file</li>
                  </ol>
               
               </li>
               <li><Link to='/Test2024080405'>Test2024080405</Link>  Conditional Rendering 2 : Logical <b>&& ||</b> Operator</li>              
               
              
              
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }