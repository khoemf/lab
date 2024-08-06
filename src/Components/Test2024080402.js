import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

//refenece: https://ithelp.ithome.com.tw/articles/10212120
//more about axios (axios 基本使用 & Config)

//reference: https://medium.com/@greennolgaa/mastering-asynchronous-data-handling-in-react-a-comprehensive-guide-using-fetch-and-axios-28f5bd9885e5
// -- Best Practices for Handling Asynchronous Data in React

//reference : https://react.dev/learn/conditional-rendering
// -- Conditional Rendering

//reference : https://refine.dev/blog/react-conditional-rendering/#conditional-rendering-with-switch-statements
// -- How to use Conditional Rendering in React

//reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// -- Conditional (ternary) operator
export default function Test2024080402() {
  const [isLoading, setIsLoading] = useState(true);
  const [objProducts, setObjProducts] = useState(null);
  const cfgAllProductsAPI = "https://www.course-api.com/react-store-products";

  const getListOfProductsOutSideUseEffect3 = async () => {
    try {
      const response = await axios.get(cfgAllProductsAPI);
      setObjProducts(response.data);
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log("error.response");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log("error.request");
        console.log(error.request);
      } else {
        // Error occured while setting up the request
        console.log("Error", error.message);
      }
    } finally {
      //console.log("Done getListOfProductsOutSideUseEffect3() ")
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListOfProductsOutSideUseEffect3();
  }, []);


  //importance reference
  /*
  function example() {
    return condition1 ? value1
      : condition2 ? value2
      : condition3 ? value3
      : value4;
  }
  This is equivalent to the following if...else chain.

  function example() {
    if (condition1) {
      return value1;
    } else if (condition2) {
      return value2;
    } else if (condition3) {
      return value3;
    } else {
      return value4;
    }
  }
  */
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
          {isLoading ? (
            <tr>
              <td>Loading ...</td>
            </tr>
          ) : objProducts == null || objProducts === undefined ? (
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
