import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './UserTable.scss'
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
const UserTable = () => {

  const [defaulters, setDefaulters] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/get-defaulters").then((data) => {
      setDefaulters(data.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#FFF" }} align="center">Action</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">Customer Name</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">Bank Name</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">Defaulter</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">PAN</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">Aadhar</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">Gntr1</TableCell>
              <TableCell style={{ color: "#FFF" }} align="left">Gntr2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              defaulters.map((item: any) => {
                return (
                  <TableRow
                    key={item._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <MDBBtn rounded className='mb-4' block>
                        View
                      </MDBBtn></TableCell>
                    <TableCell align="left">{item.Customer_Name}</TableCell>
                    <TableCell align="left">{item.Bank_Name}</TableCell>
                    <TableCell align="left">{"YES"}</TableCell>
                    <TableCell align="left">{"Not Mentioned"}</TableCell>
                    <TableCell align="left">{"Not Mentioned"}</TableCell>
                    <TableCell align="left">{"Not Mentioned"}</TableCell>
                    <TableCell align="left">{"Not Mentioned"}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
