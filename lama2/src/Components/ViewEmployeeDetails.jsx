import React,{useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewEmployeeDetails() {
  const[viewEmployee, setviewEmployee]= useState([]);
  const[error,setError] = useState("");

  useEffect(()=>{
    axios.get("/")
    .then((response)=>setviewEmployee(response.data))
    .catch((err)=>setError(err.message))
  },[]);

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
      {
        viewEmployee.map((employee)=>{
          const {employeeId, employeeName, department, designation, doj, dob, gender}=employee;
        
      
      <tr>
        <td>{employeeId}</td>
        <td>{employeeName}</td>
        <td>{department}</td>
        <td>{designation}</td>
        <td>{dob}</td>
        <td>{doj}</td>
        <td>{gender}</td>
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
      })
    }
    
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}