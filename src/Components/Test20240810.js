import React, { useState } from "react";

//reference : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39837974#search

export default function Test20240810() {
    const [formInput , setFormInput] = useState({});

    function handleSubmit(event){
        event.preventDefault();
        console.log("fai");

        const fd = new FormData(event.target);

        //do it one by one
        /*
        const name = fd.get('name');
        const age = fd.get('age');
        console.log(name, age);
        */

        //by batch
        const data = Object.fromEntries(fd.entries());

        //special handle for group of input , eg. checkbox
        const onlineChannel = fd.getAll('onlineChannel');
        data.onlineChannel = onlineChannel;

        console.log(data);

    }

  
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <br/>
        <label htmlFor="age">Age:</label><input type="text" name="age" />
        <br />
        <br />
        <label htmlFor="sex">Sex:</label>
        <input type="radio" name="sex" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="sex" id="female" value="female" />
        <label htmlFor="female">Female</label> <br />
        <br />
        <label htmlFor="country">Country: </label>
        <select name="country" id="country">
          <option>Select an option</option>
          <option value="nepal">Nepal</option>
          <option value="usa">USA</option>
          <option value="australia">Australia</option>
        </select>
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea name="message" id="message" cols="30" rows="4"></textarea>
        <br />
        <br />
        <input type="checkbox" name="newsletter" id="chkSubscribe" value="newsletter_is_yes"/>
        <label htmlFor="chkSubscribe">Subscribe?</label>
        <br />
        <br />
        online Channel <br/>
        <input type="checkbox" name="onlineChannel" id="chkNetflix" value="netflix"/>&nbsp;
        <label htmlFor="chkNetflix">netflix</label><br/>
        <input type="checkbox" name="onlineChannel" id="chkMytvsuper" value="mytvsuper"/>&nbsp;
        <label htmlFor="chkMytvsuper">mytvsuper</label><br/>
        <input type="checkbox" name="onlineChannel" id="chkDisney" value="disney"/>&nbsp;
        <label htmlFor="chkDisney">disney+</label><br/>
        <br/>
        <button>Submit</button>
      </form>
    </>
  );
}
