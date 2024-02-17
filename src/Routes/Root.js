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
              <li><Link to={`contacts/1`}>Your Name Testing</Link></li>
              <li><Link to= {`list-product`}>List-Product</Link></li>
              <li><Link to= {`testForm`}>Test Form</Link></li>
              <li><Link to= {`testUseRef`}>Test User Ref</Link></li>
              <li><Link to= {`sideBar`}>Side Bar</Link></li>
              <li><Link to= {`testList`}>Test List</Link></li>
              <li><Link to= {`testAppBar`}>Test App Bar</Link></li>              
              <li><Link to= {`testBrootstrap20240213`}>BootStrap 20240213</Link></li>
              <li><Link to='/newindex1'>New Index page 1</Link></li>
              
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }