import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function ViewEmployeeDetails() {
  return (
    <>
    <h3 align="middle" className="mt-3 fw-bolder">Customer Master Data Details</h3>
    <h5 align="middle" className="py-1">Navigating Borrower Insights: Streamlined Customer Data Management</h5>
    <hr></hr>
    <MDBTable align='middle' className="container" striped hover>
    
    <MDBTableHead>
      <tr>
        <th scope='col'>Employee Id</th>
        <th scope='col'>Employee Name</th>
        <th scope='col'>Department</th>
        <th scope='col'>Designation</th>
        <th scope='col'>Date of Joining</th>
        <th scope='col'>Date of Birth</th>
        <th scope='col'>Gender</th>
        <th scope='col'>Edit</th>
        <th scope='col'>Delete</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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
        <td>78657</td>
        <td>Siddhesh</td>
        <td>DTI</td>
        <td>Program Associate</td>
        <td>24-07-2023</td>
        <td>25--8-2000</td>
        <td>Male</td>
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