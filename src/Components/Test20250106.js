import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import DisplayTableData from './util/DisplayTableData';

//copy from Test20240804.js
export default function Test20250106() {
  const [objProducts, setObjProducts] = useState(null);
  const cfgAllProductsAPI = "https://www.course-api.com/react-store-products";

  
  //Prefer use this style for long term 20240804
  const getListOfProductsOutSideUseEffect3 = async () => {
    try {
      const response = await axios.get(cfgAllProductsAPI);
      setObjProducts(response.data); 
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log("error.response")
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log("error.request")
        console.log(error.request);
      } else {
        // Error occured while setting up the request
        console.log('Error', error.message);
      }
    } finally{
      //console.log("Done getListOfProductsOutSideUseEffect3() ")
    }
 
  };

  useEffect(() => {

    getListOfProductsOutSideUseEffect3();

  }, []);
  let tableTitle = ["#","id",
"name",
"price",
"image",
"colors",
"company",
"category"
];  
  return (
    <>
      {
        //study point
        
        //if the function component DisplayTableData function definition receive variable named with "titleAry"
        //the props name must be same as the <DisplayTableData> ie the props named with "titleAry"
      }
      <DisplayTableData titleAry={tableTitle} rs={objProducts}/>
    </>
  );
}
