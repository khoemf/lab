import React from "react";
import { useState, useRef } from "react";

//reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8294726#search
//reference : https://react.dev/reference/react/useState

export default function Test20240807() {
  let _data = [
    {
      name: "fai",
      age: 12,
      noOfClick: 0,
    },
    {
      name: "foon",
      age: 11,
      noOfClick: 0,
    },
  ];
  const [aryPerson, setAryPerson] = useState(_data);
  const txtName = useRef(null);
  const txtAge = useRef(null);

  const handleClick = () => {
    console.log("hello");
    setAryPerson((preData) => {
      return [
        ...preData,
        {
          name: txtName.current.value,
          age: txtAge.current.value,
          noOfClick: 0,
        },
      ];
    });
  };

  return (
    <>
      {aryPerson.map((ele, i) => {
        return (
          <div key={i}>
            I am <b>{ele.name}</b> and my age is <b>{ele.age}</b>.
          </div>
        );
      })}
      <br />
      Name:
      <input type="text" name="txtName" defaultValue="ABC" ref={txtName} />
      <br />
      Age: <input type="text" name="txtAge" defaultValue={10} ref={txtAge} />
      <br />
      <br />
      <input onClick={handleClick} type="button" value="Update"></input>
    </>
  );
}
