import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  rows,
  Paper
} from "@mui/material";
import { useFetch,DeleteUser } from "../../utils/functions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Contacts = ({editHandler}) => {
 const {isLoading,contactList}=useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>        
         
          <TableBody>
           {/* Bilgiler gelmediği durumda Loading yazısı görünsün */}
          {isLoading ? (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
              <TableCell colSpan={5} align="center">Loading</TableCell>             
            </TableRow>
          )  
          
          :
          // { /* Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı*/}
          contactList?.lenght===0 ? (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
            <TableCell colSpan={5} align="center">Ekrana yazacak veri bulunamadı</TableCell>             
          </TableRow>

          )
          :
          (
            //  {/* Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın */}

             contactList?.map((item,index)=>(
              <TableRow key={index}>
              <TableCell textAlign="center">{item.username.toUpperCase()}  </TableCell>
              <TableCell textAlign="center">{item.phoneNumber}</TableCell>
              <TableCell textAlign="center">{item.gender}</TableCell> 
              <TableCell textAlign="center" onClick={()=>DeleteUser(item.id)}>
                <DeleteIcon/>
              </TableCell> 
              <TableCell textAlign="center"
              onClick={()=>editHandler(
                item.id,
                item.username,
                item.phoneNumber,
                item.gender

              )}
              >
                <EditIcon/>
              </TableCell> 
             </TableRow> 
             ))

          )   }

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;

