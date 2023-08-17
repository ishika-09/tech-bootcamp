import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function PurchaseHistory() {
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
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
      </tr>
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
      </tr>
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
      </tr>
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
      </tr>
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
      </tr>
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}