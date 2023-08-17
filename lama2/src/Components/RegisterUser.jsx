import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBRadio } from 'mdb-react-ui-kit';
import User from '../Assets/Images/userRegister.jpg';

function RegisterUser() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>

        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Customer Master Data Details</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' label='Employee Id' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Employee Name' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Designation' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Departament' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Date of Birth' id='formControlLg' type='date' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Date of Joining' id='formControlLg' type='date' size="md"/>
            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline />
            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline />
            <br/><br/>
            <MDBBtn className="mb-4 w-100">Add Customer Details</MDBBtn>    
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
          <img src={User} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterUser;