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

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SideBar from './Components/SideBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {path: "contacts/:contactId",element: <Contact />,},      
      {path: "list-product",element:<ListProduct/>,},
      {path:"testForm",element:<TestForm/>},
      {path:"testUseRef",element:<TestUseRef/>},     
      
      
    ],
  },
  {
    path:"sideBar",
    element:<SideBar/>,
  },
  {
    path:"testList",
    element:<TestList/>,
  },
  {path:"testAppBar",element:<TestAppBar/>},
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
