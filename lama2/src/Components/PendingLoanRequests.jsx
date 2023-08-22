import React, {useState, useEffect} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function PendingLoanRequests() {
  const [pendingLoans, setPendingLoans] = useState([]);
  const [action, setAction] = useState(true);
  const backendURL = "http://localhost:8081/loan";

  useEffect(() => {
    axios.get(backendURL)
    .then(response => setPendingLoans(response.data));
  }, []);
  
  function handleApprove(employeeID, itemID, loanType, loanDuration, isApproved){
    axios.put(backendURL,
      {
        employeeID : employeeID,
        itemID : itemID,
        loanType : loanType,
        loanDuration : loanDuration,
        isApproved : isApproved
      },{headers:{"Content-Type" : "application/json"}})
      .then((response) => {console.log("Loan Card Approved !!")});
  }

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
      {
        pendingLoans.map((pendingLoan) => {
          const { employeeID, itemID, itemValuation, loanType, loanDuration} = pendingLoan;
          <tr>
            <td>{employeeID}</td>
            <td>{itemID}</td>
            <td>{itemValuation}</td>
            <td>{loanType}</td>
            <td>{loanDuration}</td>
            <td>
              <MDBBtn outline color='warning' rounded size='sm' className='mr-1' onClick={()=>handleApprove(employeeID, itemID, loanType, loanDuration, true)}>
                Approve
              </MDBBtn>
              <MDBBtn outline color='danger' rounded size='sm' onClick={()=>handleApprove(employeeID, itemID, loanType, loanDuration, false)}>
                Reject
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