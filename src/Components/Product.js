
import { useEffect,useState } from 'react';
import axios from 'axios';
import SFAxios from '../SFAxios/authFetch'

const randomUserUrl = 'https://randomuser.me/api';

export default function Product() {  

    const fetchData = async () =>{
      try {        
        console.count("inside fetchdata");
        const respon1 = await SFAxios('/react-store-products');
        console.log(respon1);        
      } catch (error) {
        console.log(error);        
      }

    };
  
    useEffect(()=>{      
      fetchData();
    },[]);

    
    return (
      <>
      <h1> This is product!!</h1>
      </>
    )
  }