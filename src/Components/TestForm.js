import { useState,useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TestForm() {

  const [formData, setFormData] = useState({username: "",age: "",address: ""});

  const refTxtName = useRef([]);
  const refInputGender = useRef([]);

    const handleChangeById = (e)=>{      
      
      console.log(e.target.id);
      console.log(e.target.value);
      
      const { id, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));

    }

    const handleChangeByName = (e)=>{      
      console.log(e.target.name);      
      console.log(e.target.value);

      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    }


    const handleClick = () =>{
      console.log("refTxtName by inputRef:",refTxtName.current.value);
      //console.table(refTxtName.current);
      console.log("refInputGender by ref:",refInputGender.current.value);      
      console.log("id:",refInputGender.current.id);
      console.table(refInputGender);
    }

    const handleChange = (e) =>{
      handleChangeById(e);
    }
    
    return (
      <div>
        <form name="form1" >
        <TableContainer component={Paper}>        
        <Table sx={{ maxWidth: 450,border: 1  }} aria-label="simple table">
        <TableBody sx={{ border: 1  }}>


          <TableRow key="111">
            <TableCell>Gender : </TableCell>

            <TableCell>
              <input ref={refInputGender} type="text" name="gender_by_name" id="gender_by_id"/>
            </TableCell>

          </TableRow>


        <TableRow key="1" >
                <TableCell sx={{  border: 2 }}>Name</TableCell>

                <TableCell sx={{  border: 2 }}>
                  <TextField                   
                    inputRef={refTxtName}
                    id="username" 
                    name="username" 
                    label="Names" 
                    variant="standard"                   
                    onChange={handleChange}/>
                    </TableCell>                
                </TableRow>

        <TableRow key="2" >   
                <TableCell sx={{  border: 2 }}>Age</TableCell>
                <TableCell sx={{  border: 2 }}>
                <TextField id="age" name="age" label="" variant="standard" onChange={handleChange}/>
                  </TableCell>
                </TableRow>                

        <TableRow key="4" >   
          <TableCell sx={{  border: 2 }}>Address</TableCell>
          <TableCell sx={{  border: 2 }}>
              <TextField               
                id="address" 
                name="address" 
                label="Address" 
                variant="standard"                 
                onChange={handleChange}/>
          </TableCell>
        </TableRow>                
        

        <TableRow key="3" >   
                <TableCell colSpan="2" sx={{  border: 2 }} align="right">
                <Button variant="contained" onClick={handleClick} >Update</Button>
                  </TableCell>
                </TableRow>                
        </TableBody>        

        </Table>
        
        </TableContainer>
        </form>
        <hr/>
        <u>Display with useState</u><br/>
        Name : {formData.username}<br/>
        Age: {formData.age}<br/>
        Address : {formData.address}<br/>
        <hr/>
        <u>Display with useRef</u><br/>
        Name : {refTxtName.current.value}<br/>
        Gender : {refInputGender.current.value}<br/>
        
      </div>
    );
  }