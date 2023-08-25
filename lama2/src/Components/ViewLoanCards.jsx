import React,{useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewLoanCards() {
  const[viewloan, setloan] = useState([]);
  const[error, setError] = useState("");

  useEffect(()=>{
    axios.get("/")
    .then((response)=>setloan(response.data))
    .catch((err)=> setError(err.message))
  },[]);

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
      {
        Array.from(viewloan).map((loan) => {
        const{employeeId, loanId, loanType, duration, itemId}=loan;
      <tr>
        <td>{employeeId}</td>
        <td>{loanId}</td>
        <td>{loanType}</td>
        <td>{duration}</td>
        <td>{itemId}</td>
      </tr>
        })
      }
       
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}