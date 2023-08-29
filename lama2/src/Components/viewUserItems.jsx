import React,{useEffect, useState} from 'react';
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
import copy from 'copy-to-clipboard';
import axios from 'axios';

export default function ViewUserItems() {
    
    function copyToClipboard(itemID){
        copy(itemID);
    }

    const [viewItems, setViewItems] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      axios.get("http://localhost:8081/items/all")
        .then(response => setViewItems(response.data))
        .catch(err => {
          setError(err.message);
          console.log("Error fetching items:", err.message);
        });
    }, []);

  return (
    <MDBRow className='container align-items-center'>
       {viewItems.map(item => {
            const { id, description, img, issue_status, make, category, value } = item;
        <MDBCol sm="3">
            <MDBCard className="m-3" ke={id}>
            <MDBCardImage position='top' alt='...' src={img} />
            <MDBCardBody>
                <MDBCardTitle className='fw-bold'>{description}</MDBCardTitle>
                <MDBBadge className='my-2' color='info' light>{category}</MDBBadge>
                <MDBBadge className='my-2' color='info' light>{make}</MDBBadge>
                <MDBBadge className='my-2' color={issue_status == 'Y' ? "success" : "danger"} light>{issue_status == 'Y' ? 'Available' : 'Out of Stock'}</MDBBadge>
                <MDBBtn color="warning" outline><b>$ {value}</b></MDBBtn>
                <MDBCardText className='my-2'><MDBBadge className='my-2' color='info' light>Item ID : {id}</MDBBadge><MDBBtn className='mx-2 btn-sm btn-rounded' outline onClick={() => copyToClipboard(id)}>Copy it! <MDBIcon fas icon="paste"/></MDBBtn></MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
        })}
    </MDBRow>
  );
}