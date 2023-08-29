import React, {useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewAppliedLoans() {
  const[appliedLoan,setappliedLoan]=useState([]);
  const[error,setError] = useState("");

  useEffect(()=>{
    const id = sessionStorage.getItem("username");
    axios.get(`http://localhost:8081/loanCards/allActive/${id}`,
    {headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}})
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
        <th scope='col'>Status</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {
        Array.from(appliedLoan).map((loan)=>{
        const{id,type,item, duration, issue_date} = loan;
      return(
        <tr>
        <td>{id}</td>
        <td>{type}</td>
        <td>{item.id}</td>
        <td>{duration}</td>
        <td>{issue_date}</td>
        <td><MDBBadge color={item.issue_status == 'Y' ? "success" : (item.issue_status == 'N' ?  'danger' : 'info')} >{item.issue_status == 'Y' ? 'Approved' : (item.issue_status == 'N' ?  'Rejected' : 'Processing')}</MDBBadge></td>
      </tr>
      )
      
       })
     }

    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}