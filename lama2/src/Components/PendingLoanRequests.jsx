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
        <th scope='col'>Description</th>
        <th scope='col'>Item Make</th>
        <th scope='col'>Item Valuation</th>
        <th scope='col'></th>
        <th scope='col'></th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>2345</td>
        <td>2651</td>
        <td>Tea Table</td>
        <td>Wooden</td>
        <td>10k</td>
        <td>
          <MDBBtn outline color='warning' rounded size='sm'>
            Approve
          </MDBBtn>
          </td>
          <td>
          <MDBBtn outline color='danger' rounded size='sm'>
            Reject
          </MDBBtn>
        </td>
      </tr>
      <tr>
        <td>6734</td>
        <td>2651</td>
        <td>Lamp Table</td>
        <td>Wooden</td>
        <td>12k</td>
        <td>
          <MDBBtn outline color='warning' rounded size='sm'>
            Approve
          </MDBBtn>
          </td>
          <td>
          <MDBBtn outline color='danger' rounded size='sm'>
            Reject
          </MDBBtn>
        </td>
      </tr>
      {/* <tr>
        <td>8756</td>
        <td>2651</td>
        <td>Furniture</td>
        <td>2 Month</td>
        <td>
          <MDBBtn outline color='warning' rounded size='sm'>
            Approve
          </MDBBtn>
          </td>
          <td>
          <MDBBtn outline color='danger' rounded size='sm'>
            Reject
          </MDBBtn>
        </td>
      </tr> */}
      {/* <tr>
        <td>9367</td>
        <td>2651</td>
        <td>Furniture</td>
        <td>2 Month</td>
        <td>
          <MDBBtn outline color='warning' rounded size='sm'>
            Approve
          </MDBBtn>
          </td>
          <td>
          <MDBBtn outline color='danger' rounded size='sm'>
            Reject
          </MDBBtn>
        </td>
      </tr> */}
      {/* <tr>
        <td>5274</td>
        <td>2651</td>
        <td>Furniture</td>
        <td>2 Month</td>
        <td>
          <MDBBtn outline color='warning' rounded size='sm'>
            Approve
          </MDBBtn>
          </td>
          <td>
          <MDBBtn outline color='danger' rounded size='sm'>
            Reject
          </MDBBtn>
        </td>
      </tr> */}
      {/* <tr>
        <td>5555</td>
        <td>2651</td>
        <td>Furniture</td>
        <td>2 Month</td>
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
      </tr> */}
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}