import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function PendingLoanRequests() {
  return (
    <>
    <h3 align="middle" className="mt-3 fw-bolder">Pending Loan Requests</h3>
    <h5 align="middle" className="py-1">Seamless Control: Elevate Loan Card Management Efficiency</h5>
    <hr></hr>
    <MDBTable align='middle' className="container" striped hover>
    
    <MDBTableHead>
      <tr>
        <th scope='col'>Employee ID</th>
        <th scope='col'>Item Id</th>
        <th scope='col'>Item Valuation</th>
        <th scope='col'>Loan Type</th>
        <th scope='col'>Loan Duration</th>
        <th scope='col'>Action</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>2345</td>
        <td>2651</td>
        <td>10k</td>
        <td>Wooden</td>
        <td>10 Months</td>
        <td>
          <MDBBtn outline color='warning' rounded size='sm'>
            Approve
          </MDBBtn>
          <MDBBtn outline color='danger' rounded size='sm'>
            Reject
          </MDBBtn>
        </td>
      </tr>
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}