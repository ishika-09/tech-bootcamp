import React,{useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import EditItem from './EditItem';

export default function ViewItems() {
    const[viewItems, setviewItems] = useState([]);
    const[error, setError] = useState("");

    useEffect(()=>{
      axios.get("http://localhost:8081/items/all")
      .then((response)=>setviewItems(response.data))
      .catch((err)=> setError(err.message))
    },[]);

    function handleDelete(itemId){
      axios.delete("http://localhost:8081/items/"+itemId)
        .then(response => console.log("Item Deleted !!"))
        .catch((err)=> setError(err.message))
        setviewItems(prevItems => prevItems.filter(item=>item.id!==itemId));
       
    }

    function handleEdit(itemId, description, itemStatus, itemMake, itemCategory, itemValuation){
      
    }

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
      Array.from(viewItems).map((item)=>{
        const {id, description, issue_status, make, category, value}=item;
        return(
          <tr>
          <td>{id}</td>
          <td>{description}</td>
          <td>{issue_status}</td>
          <td>{make}</td>
          <td>{category}</td>
          <td>{value}</td>
           <td>
           <MDBBtn outline color='warning' rounded size='sm'>
             Edit
           </MDBBtn>
           </td>
           <td>
           <MDBBtn outline color='danger' rounded size='sm' onClick={() => handleDelete(id)}>
             Delete
           </MDBBtn>
           </td>
           </tr>
        )
        
     })
     
      
    
    }

    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}