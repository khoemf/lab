import { useState,useRef ,useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TestUseRef() {

    const [refreshPage, setRefreshPage] = useState(0);

    const refUserName = useRef("");

    const handleClick = () =>{
        console.log("refUserName : ",refUserName.current.value);
        setRefreshPage( prev => refreshPage + 1);
    }

    return (
        <>
        <table border="1">
            <tbody>
            <tr><td>Name</td>
                <td>
                    <input type="text" name="txtUserName" id="txtUserName" ref = {refUserName}></input>
                </td>
            </tr>
            <tr><td>Name</td>
                <td>
                    {refUserName.current.value}
                </td>
            </tr>
            <tr><td align="right" colSpan="2">
                    <input onClick={handleClick} 
                    type="button"                     
                    value="Update"></input>
                </td>
            </tr>
            </tbody>
        </table>        
        </>
    );
  }