import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './Routes/Root'
import ErrorPage from './Components/ErrorPage'
import Contact from "./Routes/Contact";
import Product from "./Components/Product";
import Welcome from "./Components/Welcome";
import ListProduct from "./Components/ListProduct";
import TestForm from "./Components/TestForm"
import TestUseRef from "./Components/TestUseRef"
import sideBar from "./Components/SideBar"
import TestList from "./Components/TestList"
import TestAppBar from "./Components/TestAppBar"
import TestBrootstrap20240213 from './Components/TestBrootstrap20240213';
import Menu20240225 from './Components/Menu20240225';
import TestForm20240512 from './Components/TestForm20240512';
import TestForm202405122244 from './Components/TestForm202405122244';
import TestForm20240513 from './Components/TestForm20240513';
import Axios20240515 from './Components/Axios20240515';
import TestUseRef20240515 from './Components/TestUseRef20240515';
import TestForm20240515 from './Components/TestForm20240515';
import Test20240520 from './Components/Test20240520';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SideBar from './Components/SideBar';
import NewIndex1 from './Components/NewIndex1';
import NewIndex1Details from './Components/NewIndex1Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    //With children systax, Below page show in the same page
    children: [
      {path: "contacts/:contactId",element: <Contact />,},      
      {path: "list-product",element:<ListProduct/>,},
      {path:"testForm",element:<TestForm/>},
      {path:"testUseRef",element:<TestUseRef/>},     
      
      
      
      
    ],
  },
  //No childer systax, page show in a new page (no pop up)
  {
    path:"sideBar",
    element:<SideBar/>,
  },
  {
    path:"testList",
    element:<TestList/>,
  },
  {path:"testAppBar",element:<TestAppBar/>},
  {path:"testBrootstrap20240213",element:<TestBrootstrap20240213/>},     
  {path:"/newindex1",element:<NewIndex1/>},     
  {path:"/newindex1details/:index_id/:location",element:<NewIndex1Details/>},     
  {path:"/Menu20240225/",element:<Menu20240225/>},         
  {path:"/TestForm20240512/",element:<TestForm20240512/>},
  {path:"/TestForm202405122244/",element:<TestForm202405122244/>},
  {path:"/TestForm20240513/",element:<TestForm20240513/>},
  {path:"/Axios20240515/",element:<Axios20240515/>},
  {path:"/TestUseRef20240515/",element:<TestUseRef20240515/>},
  {path:"/TestForm20240515/",element:<TestForm20240515/>},
  {path:"/Test20240520/",element:<Test20240520/>},
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
