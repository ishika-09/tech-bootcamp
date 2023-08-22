import React, {useState, useEffect} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';


export default function PurchaseHistory() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    axios.get("/user/purchase")
    .then((response) => setPurchaseHistory(response.data))
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
        <th scope='col'>Loan Card Id</th>
        <th scope='col'>Description</th>
        <th scope='col'>Item Make</th>
        <th scope='col'>Item Category</th>
        <th scope='col'>Item Valuation</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {
        purchaseHistory.map((item) => {
          const {itemID, lonaCardID, description, itemMake, itemCategory, itemValuation} = item;
          <tr>
            <td>{itemID}</td>
            <td>{lonaCardID}</td>
            <td>{description}</td>
            <td>{itemMake}</td>
            <td>{itemCategory}</td>
            <td>{itemValuation}</td>
          </tr>
        })
      }
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}