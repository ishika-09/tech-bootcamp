import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function ViewLoanCards() {
  return (
    <>
    <h3 align="middle" className="mt-3 fw-bolder">View Approved Loan Cards</h3>
    <h5 align="middle" className="py-1">Seamless Control: Elevate Loan Card Management Efficiency</h5>
    <hr></hr>
    <MDBTable align='middle' className="container" striped hover>
    
    <MDBTableHead>
      <tr>
        <th scope='col'>Employee ID</th>
        <th scope='col'>Loan Id</th>
        <th scope='col'>Loan Type</th>
        <th scope='col'>Duration</th>
        <th scope='col'>Item Id</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>2345</td>
        <td>2651</td>
        <td>Furniture</td>
        <td>2 Month</td>
        <td>902378</td>
      </tr>
      <tr>
        <td>2345</td>
        <td>2651</td>
        <td>Furniture</td>
        <td>2 Month</td>
        <td>902378</td>
      </tr>
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}