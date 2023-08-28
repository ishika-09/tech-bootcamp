import React, {useState, useEffect} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function PendingLoanRequests() {
  const [pendingLoans, setPendingLoans] = useState([]);
  const [error, setError] = useState("");
  const backendURL = "http://localhost:8081/loanCards/allPending";

  useEffect(() => {
    axios.get(backendURL)
    .then(response => setPendingLoans(response.data));
  }, []);
  
  function handleApprove(employeeID, itemID, loanID, loanType, loanDuration, isApproved){
    axios.put(backendURL,
      {
        user_id : employeeID,
        item_id : itemID,
        id: loanID,
        type : loanType,
        duration : loanDuration,
        isApproved : isApproved
      },{headers:{"Content-Type" : "application/json"}})
      .then((response) => {console.log("Loan Card Approved/Rejected !!")})
      .error((err) => setError(err))
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
        <th scope='col'>Item ID</th>
        <th scope='col'>Item Valuation</th>
        <td scope="col">Loan ID</td>
        <th scope='col'>Loan Type</th>
        <th scope='col'>Loan Duration</th>
        <th scope='col'>Action</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {
         Array.from(pendingLoans).map((pendingLoan) => {
          // Added LoanID here
          const { user_id, item_id, type, id, duration} = pendingLoan;
          return(
            <tr>
            <td>{user_id}</td>
            <td>{item_id}</td>
            <td>{id}</td>
            <td>{type}</td>
            <td>{duration}</td>
            <td>
              <MDBBtn outline color='warning' rounded size='sm' className='mr-1' onClick={()=>handleApprove(user_id, item_id, id, type, duration, true)}>
                Approve
              </MDBBtn>
              <MDBBtn outline color='danger' rounded size='sm' onClick={()=>handleApprove(user_id, item_id, id, type, duration, false)}>
                Reject
              </MDBBtn>
            </td>
          </tr>
          )
          
})
      }
    </MDBTableBody>
  </MDBTable>
    </>
    
  );
}