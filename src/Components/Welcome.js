import  {useState,useEffect} from "react";
const axios = require('axios').default;


export default function Welcome() {

    //console.log("inside Welcome!!");
    const [countcount , setCountCount] = useState(0);
    
    const [user , setUser] = useState({name:"",city:"",age:50})

    const totalPrice = countcount * 3;

    useEffect(()=>{console.log(`count count is updated to ${countcount}`)},[countcount]);

    function handleOnClick(){
  console.count("foon!!");
      setCountCount( (prev) => prev + 1 );
//setCountCount(0);
      
    }

    const handleChange = (e) =>{
      setUser({...user, name : e.target.value});
    }

    return (
      <>
      <h1>This is Welcome!!!!</h1>
      <span>Click TIme : {countcount}</span><br/>
      <input type="button" name="cmdClickMe" value="Click Me" onClick={handleOnClick}/><br/>
      <input type="text" name="txtUserName" onChange={handleChange}/><br/>
      New User Name : {user.name}<br/>
      New User City : {user.city}<br/>
      New User Age : {user.age}<br/>
      <br/><br/>
      You have to pay : {totalPrice}
      </>
    )
  }