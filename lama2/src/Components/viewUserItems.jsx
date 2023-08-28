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

    const[viewItems, setviewItems] = useState([]);
    const[error, setError] = useState("");

    useEffect(()=>{
      axios.get("http://localhost:8081/items/all") // SetEndPoint
      .then((response)=>setviewItems(response.data))
      .catch((err)=> setError(err.message))
    },[]);

  return (
    <MDBRow className='container align-items-center'>
      {Array.from(viewItems).map((item) => {
        //itemStatus
        const {itemId, itemTitle, itemImg, description, itemCategory, itemValuation} = item;
        <MDBCol sm="3">
            <MDBCard className="m-3">
            <MDBCardImage position='top' alt='...' src={itemImg} />
            <MDBCardBody>
                <MDBCardTitle className='fw-bold'>{itemTitle}</MDBCardTitle>
                <MDBBadge className='my-2' color='info' light>{itemCategory}</MDBBadge>
                <MDBCardText>
                  {description}
                </MDBCardText>
                <MDBBtn color="warning" outline><b>${itemValuation}</b></MDBBtn>
                <MDBCardText className='my-2'><MDBBadge className='my-2' color='info' light>Item ID : {itemId}</MDBBadge><MDBBtn className='mx-2 btn-sm btn-rounded' outline onClick={() => copyToClipboard(itemId)}>Copy it! <MDBIcon fas icon="paste"/></MDBBtn></MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
        })}
    </MDBRow>
  );
}