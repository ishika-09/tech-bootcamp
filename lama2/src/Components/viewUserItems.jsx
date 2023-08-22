import React, {useState} from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBadge,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function ViewUserItems() {
    const [text, setText] = useState("");

  return (
    <MDBRow className='container align-items-center'>
        <MDBCol sm="3">
            <MDBCard className="m-3">
            <MDBCardImage position='top' alt='...' src='https://th.bing.com/th/id/OIP.PayejFry73w7wUy1QPUZJAHaHa?pid=ImgDet&rs=1' />
            <MDBCardBody>
                <MDBCardTitle className='fw-bold'>Tea Table</MDBCardTitle>
                <MDBBadge className='my-2' color='info' light>Furniture</MDBBadge>
                <MDBCardText>
                Crafted for style and function, its premium materials and spacious design provide the perfect setting for tea essentials.
                </MDBCardText>
                <MDBBtn color="warning" outline><b>$30</b></MDBBtn>
                <MDBCardText className='my-2'><MDBBadge className='my-2' color='info' light>Item ID : 74682</MDBBadge><MDBBadge className='ml-2' outline>Copy it! <MDBIcon fas icon="paste"/></MDBBadge></MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol sm="3">
            <MDBCard className="m-3">
            <MDBCardImage position='top' alt='...' src='https://th.bing.com/th/id/OIP.hSdbO35ZecmUvGWn2EuM9wHaHa?pid=ImgDet&rs=1' />
            <MDBCardBody>
                <MDBCardTitle className='fw-bold'>Table Fan</MDBCardTitle>
                <MDBBadge className='my-2' color='info' light>Electrical</MDBBadge>
                <MDBCardText>
                With its sleek design and powerful airflow, it's the perfect addition to any room.                </MDBCardText>
                <MDBBtn color="warning" outline><b>$10</b></MDBBtn>
                <MDBCardText className='my-2'><MDBBadge className='my-2' color='info' light>Item ID : 78609</MDBBadge><MDBBadge className='ml-2' outline>Copy it! <MDBIcon fas icon="paste"/></MDBBadge></MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
  );
}