import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

//udemy reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836946#search
// --> 232. Sending HTTP Requests (GET Request) via useEffect

//refenece: https://ithelp.ithome.com.tw/articles/10212120
//more about axios (axios 基本使用 & Config)

//reference: https://medium.com/@greennolgaa/mastering-asynchronous-data-handling-in-react-a-comprehensive-guide-using-fetch-and-axios-28f5bd9885e5
// -- Best Practices for Handling Asynchronous Data in React
export default function Test20240804() {
  const [objProducts, setObjProducts] = useState(null);
  const cfgAllProductsAPI = "https://www.course-api.com/react-store-products";

  
// Want to use async/await? Add the `async` keyword to your outer function/method.
  //async function getListOfProducts() {  <-- same , but not arrow function
  const getListOfProductsOutSideUseEffect1 = async () => {    
    /*
    With async/await, the error handling technique is different. 
    To handle errors in a standard API call using Axios, 
    we use a try...catch block. Inside the catch, we can handle errors. 
     */
    try {
      await axios.get(cfgAllProductsAPI).then((response) => {
        setObjProducts(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getListOfProductsOutSideUseEffect2 = () => {
    axios
      .get(cfgAllProductsAPI)
      .then(function (response) {
        setObjProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

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
      console.log("Done getListOfProductsOutSideUseEffect3() ")
    }
 
  };

  useEffect(() => {
    //method : declare the method out side the useEffect, prefer declare outside
    //getListOfProductsOutSideUseEffect1();

    //method : similar to getListOfProductsOutSideUseEffect()
    //     but it demo not to use async/await function
    //getListOfProductsOutSideUseEffect2();

    //Prefer use this style for long term 20240804
    //method : similar to getListOfProductsOutSideUseEffect()
    //     but it demo not to use async/await function 
    getListOfProductsOutSideUseEffect3();

    /*
    //method : declare the method inside the useEffect , for internal use only
    const getListOfProductsInSideUseEffect = async () => {
      try {
        await axios.get(cfgAllProductsAPI).then((response) => {
          setObjProducts(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getListOfProductsInSideUseEffect();
    */

  }, []);

  return (
    <>
      <table border="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {objProducts == null || objProducts === undefined ? (
            <tr>
              <td>No Data</td>
            </tr>
          ) : (
            objProducts.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}
