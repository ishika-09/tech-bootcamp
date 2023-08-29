import React, {useState, useEffect} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';


export default function PurchaseHistory() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("username");
    axios.get(`http://localhost:8081/items/allPurchased/${id}`,
    {headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}})
    .then((response) => setPurchaseHistory(response.data))
    .catch((err)=> setError(err.message))
  }, [])
  
  return (
    <>
    <h3 align="middle" className="mt-3 fw-bolder">Items Purchased</h3>
    <h5 align="middle" className="py-1">Your Purchase Journey Unveiled: Explore Item History with Ease</h5>
    <hr></hr>
    <MDBTable align='middle' className="container" striped hover>
    
    <MDBTableHead>
      <tr>
        <th scope='col'>Item Id</th>
        <th scope='col'>Description</th>
        <th scope='col'>Item Make</th>
        <th scope='col'>Item Category</th>
        <th scope='col'>Item Valuation</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {
        Array.from(purchaseHistory).map((item) => {
          const {id, description, make, category, value} = item;
          return(
            <tr>
            <td>{id}</td>
            <td>{description}</td>
            <td>{make}</td>
            <td>{category}</td>
            <td>{value}</td>
          </tr>
          )
          
        })
      }
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}