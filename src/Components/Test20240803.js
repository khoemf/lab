import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

//reference : https://medium.com/@mehmet.r.river/fetching-data-with-axios-in-react-42f79490a97b
//conditional render: https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function
//rendering list: https://react.dev/learn/rendering-lists

//udemy reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8244708#overview
// --> 267. Fetching Meals Data (GET HTTP Request)

//udemy reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836946#search
// --> 232. Sending HTTP Requests (GET Request) via useEffect
export default function Test20240803() {
  const [objProducts, setObjProducts] = useState(null);

  const cfgAllProductsAPI = "https://www.course-api.com/react-store-products";
  const cfgProductID1 = "rec1Ntk7siEEW9ha1";
  const cfgProductID2 = "recotY5Nh00DQFdkm";
  const cfgSingleProductApi =
    "https://www.course-api.com/react-store-single-product";

  // Want to use async/await? Add the `async` keyword to your outer function/method.
  async function getSingleProduct(productId) {
    try {
      const response = await axios.get(
        cfgSingleProductApi + "?id=" + productId
      );
      //console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Want to use async/await? Add the `async` keyword to your outer function/method.

  //async function getListOfProducts() {
  const getListOfProducts = async () => {
    try {
      await axios.get(cfgAllProductsAPI).then((response) => {        
        setObjProducts(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // method 1
  useEffect(() => {
    getListOfProducts();
  }, []);

  /*
  if (objProducts == null) {
    return;
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
              )
            })
          )}
        </tbody>
      </table>
    </>
  );
}
