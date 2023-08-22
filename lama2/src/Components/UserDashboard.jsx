import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function UserDashboard() {
  return (
    <>
    <h3 align="middle" className="mt-4 pt-4 fw-bolder">User Dashboard</h3>
    <h5 align="middle" className="py-1">Your Financial Command Center: Loans, Purchases, All in One Place</h5>
    <hr/>
    <div className="container d-flex">  
    <MDBCard className="m-3">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">View Loans History</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Your Loan Portfolio at a Glance: Explore, Understand, Excel
        </MDBCardText>
        <MDBBtn href="/viewAppliedLoans" className='w-100 my-2'>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="m-3">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">Apply Loan Card</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Empower Your Ambitions: Seamlessly Apply for Your Next Chapter
        </MDBCardText>
        <MDBBtn href="/applyLoanCard" className='w-100 my-2'>Apply</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="m-3">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">Purchase Items</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Walk through the available items and avail the loan card. Don't miss
        </MDBCardText>
        <MDBBtn href="/viewUserItems" className='w-100 my-2'>View Items</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="m-3">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">Purchase History</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Your Purchase Journey Unveiled: Explore Item History with Ease
        </MDBCardText>
        <MDBBtn href="/purchaseHistory" className='w-100 my-2'>View Purchase History</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </>
  );
}