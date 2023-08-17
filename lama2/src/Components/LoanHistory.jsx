import React from 'react';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function LoanHistory() {
  return (
    <MDBTable align='middle' className='container'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Loan Id</th>
          <th scope='col'>Loan Type</th>
          <th scope='col'>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p className='text-muted mb-0'>536281</p>
          </td>
          <td>
            <p className='text-muted mb-0'>Furniture</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
        </tr>
        <tr>
          <td>
            <p className='text-muted mb-0'>536281</p>
          </td>
          <td>
            <p className='text-muted mb-0'>Furniture</p>
          </td>
          <td>
            <MDBBadge color='secondary' pill>
              Paid
            </MDBBadge>
          </td>
        </tr>
        <tr>
          <td>
            <p className='text-muted mb-0'>728644</p>
          </td>
          <td>
            <p className='text-muted mb-0'>Crokery</p>
          </td>
          <td>
            <MDBBadge color='danger' pill>
              Rejected
            </MDBBadge>
          </td>
        </tr>
        <tr>
          <td>
            <p className='text-muted mb-0'>728644</p>
          </td>
          <td>
            <p className='text-muted mb-0'>Crokery</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Request Processing
            </MDBBadge>
          </td>
          </tr>
      </MDBTableBody>
    </MDBTable>
  );
}