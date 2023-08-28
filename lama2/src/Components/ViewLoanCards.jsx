import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewLoanCards() {
  const [viewloan, setLoan] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/loanCards/allApproved")
      .then(response => {
        setLoan(response.data); 
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h3 align="middle" className="mt-3 fw-bolder">View Approved Loan Cards</h3>
      <h5 align="middle" className="py-1">Seamless Control: Elevate Loan Card Management Efficiency</h5>
      <hr />
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
          {viewloan.map(loan => {
            const { user, id, type, duration, item } = loan;
            return (
              <tr> 
                <td>{user}</td>
                <td>{id}</td>
                <td>{type}</td>
                <td>{duration}</td>
                <td>{item.id}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
