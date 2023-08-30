import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import EditCustomerDetails from './EditCustomerDetails';

export default function ViewEmployeeDetails() {
  const [viewEmployee, setViewEmployee] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/users/allValid",
    {headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}})
      .then(response => {
        setViewEmployee(response.data);
        console.log(response.data);
      })
      .catch((err)=> {
        setError(err.message);
        console.log(err.message);
        window.location.href = "http://localhost:3000/error";
      });
  }, []);

  function handleDelete(employeeId) {
    axios.delete("http://localhost:8081/users/" + employeeId,
    {headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}})
      .then(response => {
        console.log("Employee Deleted !!");
        setViewEmployee(prevEmployee => prevEmployee.filter(employee => employee.id !== employeeId));
      })
      .catch((err)=> {
        setError(err.message);
        console.log(err.message);
        window.location.href = "http://localhost:3000/error";
      });
  }
  function handleEdit(employeeId) {
    window.location.href = "http://localhost:3000/editCustomer?id=" + employeeId;
  }

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
          {viewEmployee.map(employee => {
            const { id, name, department, designation, doj, dob, gender } = employee;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{department}</td>
                <td>{designation}</td>
                <td>{dob}</td>
                <td>{doj}</td>
                <td>{gender}</td>
                <td>
                  <MDBBtn outline color='warning' rounded size='sm' onClick={() => handleEdit(id)}>
                    Edit
                  </MDBBtn>
                </td>
                <td>
                  <MDBBtn outline color='danger' rounded size='sm' onClick={() => handleDelete(id)}>
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
