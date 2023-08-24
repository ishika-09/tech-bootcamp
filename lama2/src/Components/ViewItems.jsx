import React,{useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewItems() {
  const[viewItems, setviewItems] = useState([]);
  const[error, setError] = useState("");

  useEffect(()=>{
    axios.get("/")
    .then((response)=>setviewItems(response.data))
    .catch((err)=> setError())
  },[]);
    return (
    <>
    <h3 align="middle" className="mt-3 fw-bolder">Item Master Data Details</h3>
    <h5 align="middle" className="py-1">Efficiency Unleashed: Masterful Items Management Simplified</h5>
    <hr></hr>
    <MDBTable align='middle' className="container" striped hover>
    
    <MDBTableHead>
      <tr>
        <th scope='col'>Item Id</th>
        <th scope='col'>Description</th>
        <th scope='col'>Issue Status</th>
        <th scope='col'>Item Make</th>
        <th scope='col'>Item Category</th>
        <th scope='col'>Item Valuation</th>
        <th scope='col'>Edit</th>
        <th scope='col'>Delete</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
     {
      viewItems.map((item)=>{
        const {itemId, description, itemStatus, itemMake, itemCategory, itemValuation}=item;
        <tr>
          <td>{itemId}</td>
          <td>{description}</td>
          <td>{itemStatus}</td>
          <td>{itemMake}</td>
          <td>{itemCategory}</td>
          <td>{itemValuation}</td>
           <td>
           <MDBBtn outline color='warning' rounded size='sm'>
             Edit
           </MDBBtn>
           </td>
           <td>
           <MDBBtn outline color='danger' rounded size='sm'>
             Delete
           </MDBBtn>
           </td>
           </tr>
     })
     
      
    
    }

    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}