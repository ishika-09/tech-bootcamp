import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function PendingLoanRequests() {
  const [pendingLoans, setPendingLoans] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const backendURL = 'http://localhost:8081/loanCards/allPending';
  const [token, setToken] = useState('Bearer ' + sessionStorage.getItem("authToken"));

useEffect(() => {
  setToken('Bearer ' + sessionStorage.getItem("authToken"));
}, [sessionStorage.getItem("authToken")]);
 
  useEffect(() => {
    axios.get(backendURL,
    {headers:{"Content-Type" : "application/json", "Authorization" : token}})
      .then(response => {
        setPendingLoans(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  function handleApprove(employeeID, itemID, loanID, loanType, loanDuration, valid) {
    setLoading(true);
    axios.put(
      'http://localhost:8081/admins/approveLoan',
      {
        user:{id: employeeID},
        item : {id: itemID},
        id: loanID,
        type: loanType,
        duration: loanDuration,
        valid: valid
      },
      {headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}}
    )
      .then(response => {
        console.log('Loan Card Approved/Rejected !!');
        // Fetch pending loans again after the action is completed
        axios.get(backendURL)
          .then(response => {
            setPendingLoans(response.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <>
      <h3 align="middle" className="mt-3 fw-bolder">
        Pending Loan Requests
      </h3>
      <h5 align="middle" className="py-1">
        Seamless Control: Elevate Loan Card Management Efficiency
      </h5>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MDBTable align="middle" className="container" striped hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Item ID</th>
              <th scope="col">Loan ID</th>
              <th scope="col">Loan Type</th>
              <th scope="col">Loan Duration(in months)</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {pendingLoans.map(pendingLoan => {
              const { user_id, item, type, id, duration } = pendingLoan;
              return (
                <tr key={id}>
                  <td>{user_id}</td>
                  <td>{item.id}</td>
                  <td>{id}</td>
                  <td>{type}</td>
                  <td>{duration}</td>
                  <td>
                    <MDBBtn
                      outline
                      color="warning"
                      rounded
                      size="sm"
                      className="mr-1"
                      onClick={(e) =>
                        handleApprove(user_id, item.id, id, type, duration, 1)
                      }
                    >
                      Approve
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="danger"
                      rounded
                      size="sm"
                      onClick={() =>
                        handleApprove(user_id, item.id, id, type, duration, 0)
                      }
                    >
                      Reject
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      )}
    </>
  );
}
