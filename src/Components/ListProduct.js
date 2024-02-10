import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//https://codesandbox.io/s/react-axios-api-html-table-gfqe1?file=/src/App.js:429-500

export default function ListProduct() {
  let response = null;
  const [loadingDone, setLoadingDone] = useState(false);
  const [apiData, setAPIData] = useState([]);
  console.log(loadingDone);
    const fetchData = async () =>{
      try{
        response = await axios.get('https://course-api.com/react-store-products');
        setLoadingDone(true);
        console.log("insid");
        console.log(loadingDone);
        console.log(response);        
        setAPIData(response.data);
      } catch (error) {
        console.error(error);
      } finally{
        console.log("fetchData done");
      };
    }

    const handleClickDetails = () =>{
      console.count("fai");
    }

    useEffect(() =>{
      fetchData();
    },[]);

    if(loadingDone===false){
      return(<>Data is loading</>);
    }
    return (
      <>
      <h1>This is ListProduct</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            loadingDone && 
            apiData.map((_data) => (
              <TableRow
                key={_data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{_data.name}</TableCell>
                <TableCell >{_data.price}</TableCell>
                <TableCell >{_data.company}</TableCell>
                <TableCell><Button variant="outlined" onClick={handleClickDetails}>Details</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>


        </Table>
      </TableContainer>
      </>
    )
  }