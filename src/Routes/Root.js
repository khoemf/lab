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
              <li><Link to='/Menu20240225'>Menu20240225</Link></li>
              <li><Link to='/TestForm20240512'>TestForm20240512</Link></li>
              <li><Link to='/TestForm202405122244'>TestForm202405122244</Link></li>
              <li><Link to='/TestForm20240513'>TestForm20240513</Link></li>
              <li><Link to='/Axios20240515'>Axios20240515 + UseRef</Link></li>
              <li><Link to='/TestUseRef20240515'>TestUseRef20240515</Link></li>
              <li><Link to='/TestForm20240515'>TestForm20240515</Link></li>
              <li><Link to='/Test20240520'>Test20240520</Link></li>
              <li><Link to='/CallAPI20240703'>CallAPI20240703</Link></li>
              
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }