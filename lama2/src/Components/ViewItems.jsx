import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function ViewItems() {
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
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td><MDBBadge color='success' rounded size='sm'>Available</MDBBadge></td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
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
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td><MDBBadge color='danger' rounded size='sm'>Out of Stock</MDBBadge></td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
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
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td><MDBBadge color='success' rounded size='sm'>Available</MDBBadge></td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
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
      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td><MDBBadge color='success' rounded size='sm'>Available</MDBBadge></td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
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

      <tr>
        <td>896754</td>
        <td>Tea Table</td>
        <td><MDBBadge color='success' rounded size='sm'>Available</MDBBadge></td>
        <td>Wooden</td>
        <td>Furniture</td>
        <td>5000</td>
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

    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}