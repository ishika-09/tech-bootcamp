import React, {useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewAppliedLoans() {
  const{appliedLoan,setappliedLoan}=useState([]);
  const[error,setError] = useState("");

  useEffect(()=>{
    const id = sessionStorage.getItem("username");
    axios.get(`http://localhost:8080/users/allValid/${id}`)
    .then((response)=>setappliedLoan(response.data))
    .catch((err)=>setError(err.message))
  },[]);

  return (
    <>
    <h3 align="middle" className="mt-3 fw-bolder">Loan Cards Availed</h3>
    <h5 align="middle" className="py-1">Your Loan Portfolio at a Glance: Explore, Understand, Excel</h5>
    <hr></hr>
    <MDBTable align='middle' className="container" striped hover>
    
    <MDBTableHead>
      <tr>
        <th scope='col'>Loan Id</th>
        <th scope='col'>Loan Type</th>
        <th scope='col'>Item Id</th>
        <th scope='col'>Duration</th>
        <th scope='col'>Card Issue Date</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {
        appliedLoan.map((appliedLoan)=>{
        const{loanId,loanType,itemId, duration, cardIssueDate} = appliedLoan;
      <tr>
        <td>{loanId}</td>
        <td>{loanType}</td>
        <td>{itemId}</td>
        <td>{duration}</td>
        <td>{cardIssueDate}</td>
      </tr>
       })
     }

    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}