import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBRadio, MDBRange } from 'mdb-react-ui-kit';
import Cart from '../Assets/Images/cart.jpg';

function AddItems() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>

        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Item Master Data Details</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' label='Item Category' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Item Description' id='formControlLg' type='textarea' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Item Value' id='formControlLg' type='text' size="md"/>
            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Available' inline />
            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='OutOfStock' inline />
            <MDBInput wrapperClass='mt-2 mb-4' label='Item Make' id='formControlLg' type='text' size="md"/>
            <MDBRange
                defaultValue={10}
                id='customRange'
                label='Duration'
                min={1}
                max={24}
            />
            <br/><br/>
            <MDBBtn className="mb-4 w-100">Add Item Details</MDBBtn>    
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
          <img src={Cart} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default AddItems;