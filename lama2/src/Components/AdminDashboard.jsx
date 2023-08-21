import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function AdminDashboard() {
  return (
    <>
    <h3 align="middle" className="mt-4 pt-4 fw-bolder">Admin Dashboard</h3>
    <h5 align="middle" className="py-1">Empowering Financial Futures: Your Loan Management Command Center</h5>
    <hr/>
    <div className="container d-flex">
    <MDBCard className="m-5">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">Customer Data Management</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Navigating Borrower Insights: Streamlined Customer Data Management
        </MDBCardText>
        <hr/>
        <MDBBtn href="/registerUser" className='w-100 my-2'>Add Customer Details</MDBBtn>
        <MDBBtn href="/viewEmployeeDetails" className='w-100 my-2'>View Customer Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="m-5">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">Loan Card Management</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Seamless Control: Elevate Loan Card Management Efficienc
        </MDBCardText>
        <hr/>
        {/* <MDBBtn href="/addLoanCard" className='w-100 my-2'>Add New Loan Cards</MDBBtn> */}
        {/* <MDBBtn href="/viewLoanCards" className='w-100 my-2'>View Loan Cards</MDBBtn> */}
        <MDBBtn href= "/pendingLoanRequests" className='w-100 my-2'>Show pending Loan requests</MDBBtn>
        <MDBBtn href="/viewLoanCards" className='w-100 my-2'>Show approved Loans</MDBBtn>
        <MDBBtn href="/addLoanCard" className='w-100 my-2'>Add Loan Card</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="m-5">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">Item Data Management</MDBCardTitle>
        <hr/>
        <MDBCardText>
        Efficiency Unleashed: Masterful Items Management Simplified
        </MDBCardText>
        <hr/>
        <MDBBtn href="/addItem" className='w-100 my-2'>Add Items</MDBBtn>
        <MDBBtn href="/viewItems" className='w-100 my-2'>View Items</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </>
  );
}