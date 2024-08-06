import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

//reference : https://refine.dev/blog/react-conditional-rendering/#conditional-rendering-with-switch-statements
// Search "Using IIFEs (Immediately Invoked Function Expressions)"

export default function Test2024080403() {
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
          {(() => {
            if (isLoading) {
              return (
                <tr>
                  <td>Loading ...</td>
                </tr>
              );
            } else if (objProducts == null || objProducts === undefined) {
              return (
                <tr>
                  <td>No Data</td>
                </tr>
              );
            } else {
              return objProducts.map((product, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              });
            }
          })()}
        </tbody>
      </table>
    </>
  );
}
