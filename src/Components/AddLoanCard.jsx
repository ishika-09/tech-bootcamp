import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBSelect, MDBRange } from 'mdb-react-ui-kit';
import Card from '../Assets/Images/Credit-card.jpg';

function AddLoanCard() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
      <MDBCol col='10' md='6'>
          <img src={Card} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Loan Card Master Details</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' label='Loan Id' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Loan Type' id='formControlLg' type='text' size="md"/>
            <MDBRange
                defaultValue={10}
                id='customRange'
                label='Duration'
                min={1}
                max={24}
            />
            <br/><br/>
            <MDBBtn className="mb-4 w-100">Add Loan Card Details</MDBBtn>    
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
          <img src={Card} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default AddLoanCard;