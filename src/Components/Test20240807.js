import React from "react";
import { useState, useRef } from "react";

//reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8294726#search
// add item (by reducer)

//reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8536272#search
// remove item (by reducer)

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
  const [aryDelPerson, setAryDelPerson] = useState([]);
  const txtName = useRef(null);
  const txtAge = useRef(null);

  const handleClick = () => {

    //notes: use immutable to update $aryPerson. Return a new array and assign back to aryPerson
    setAryPerson((preData) => {
      return [
        //insert all existing data (...preData) into the new array first
        ...preData,

        //add a new element/object to the end of the array
        {
          name: txtName.current.value,
          age: txtAge.current.value,
          noOfClick: 0,
        },
      ];
    });
  };

  function handleDelete(deleteEleIndex) {
    //add to del person array
    setAryDelPerson((preDelPerson) => {
      let delPerson = aryPerson[deleteEleIndex];
      return [
        ...preDelPerson,
        {
          name: delPerson.name,
          age: delPerson.age,
          noOfClick: delPerson.noOfClick,
        },
      ];
    });

    //remove from  existing person
    //notes: use immutable to update $aryPerson. Return a new array and assign back to aryPerson
    setAryPerson((prePerson) => {
      return prePerson.filter(
        (prePerson, personIndex) => personIndex !== deleteEleIndex
      );
    });
  }

  function handleRestoreAllDel() {

    //add to existing person
    //notes: use immutable to update $aryPerson. 
    //       return a new prePerson
    //       first retore by previous person with spread Operator syntac [...prePerson]
    //       then push delperson to aryperson with spread Operator  syntac [...aryDelPerson]
    setAryPerson((prePerson) => {
      return [...prePerson, ...aryDelPerson];
    });

    //remove all person in del history
    setAryDelPerson((deletePerson) => {
      return [];
    });
  }

  function handleRemoveAllPerson(){
    
        //add all person to del history person
        setAryDelPerson((preDelPerson) => {
          return [...preDelPerson, ...aryPerson];
        });
    
        //remove all person 
        setAryPerson((prePerson) => {
          return [];
        });
  }
  return (
    <>
      {aryPerson.map((ele, i) => {
        return (
          <span key={i}>
            {i + 1}) I am <b>{ele.name}</b> and my age is <b>{ele.age}</b>.
            <button type="button" onClick={() => handleDelete(i)}>
              Delete this row id:{i}
            </button>
            <br />
          </span>
        );
      })}
      <button type="button" onClick={handleRemoveAllPerson}>
        Remove all the person
      </button>
      <hr />
      <br />
      Name:
      <input type="text" name="txtName" defaultValue="ABC" ref={txtName} />
      <br />
      Age: <input type="text" name="txtAge" defaultValue={10} ref={txtAge} />
      <br />
      <br />
      <input onClick={handleClick} type="button" value="Add Person"></input>
      <hr />
      <br />
      Delete History
      <br />
      You have delete the following information before{" "}
      <button type="button" onClick={handleRestoreAllDel}>
        Restore all the remove person
      </button>
      <br />
      {aryDelPerson.map((ele, i) => {
        return (
          <span key={i}>
            {i + 1}) Name <b>{ele.name}</b> and age is <b>{ele.age}</b>.
            <br />
          </span>
        );
      })}
    </>
  );
}
