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
  const authToken = "Bearer " + sessionStorage.getItem("authToken");
  const imgs = {'Tea Table' : 'https://th.bing.com/th/id/OIP.PayejFry73w7wUy1QPUZJAHaHa?pid=ImgDet&rs=1',
  'Glass' : 'https://i.pinimg.com/originals/02/87/78/028778e231bd05469505be626b565504.jpg',
  'Fan' : 'https://i5.walmartimages.com/asr/8df4c075-3bb5-4f5b-baf9-4a4129c44a8f_1.0fa04fc43559001e7c86dee1fe2a4333.jpeg',
  'sofa' : 'https://i5.walmartimages.com/asr/dfe30b23-73f1-463b-92b0-9fa05b57745c.d9295c3f85b15b074db8c6f76a70d1d5.jpeg'
  }
    
    function copyToClipboard(itemID){
        copy(itemID);
    }

    const[viewItems, setviewItems] = useState([]);
    const[error, setError] = useState("");

    useEffect(()=>{
      axios.get("http://localhost:8081/items/all", // SetEndPoint
      {headers:{'Content-Type' : 'application/json','Access-Control-Allow-Origin' : '*',Authorization :`${authToken}`}})
      .then((response)=>setviewItems(response.data))
      .catch((err)=> {setError(err.message);console.log(error)});
    },[]);

  return (
    <MDBRow className='container align-items-center'>
       {viewItems.map(item => {
            const { id, description, issue_status, make, category, value } = item;
        return (<MDBCol sm="3">
            <MDBCard className="m-3" ke={id}>
            <MDBCardImage position='top' alt='...' src={imgs[description]} />
            <MDBCardBody>
                <MDBCardTitle className='fw-bold'>{description}</MDBCardTitle>
                <MDBBadge className='my-2' color='info' light>{category}</MDBBadge>&nbsp;
                <MDBBadge className='my-2' color='info' light>{make}</MDBBadge>&nbsp;
                <MDBBadge className='my-2' color={issue_status != 'Y' ? "success" : "danger"} light>{issue_status != 'Y' ? 'Available' : 'Out of Stock'}</MDBBadge>&nbsp;
                <MDBBtn color="warning" outline><b>Rs. {value}</b></MDBBtn>
                <MDBCardText className='my-2'><MDBBadge className='my-2' color='info' light>Item ID : {id}</MDBBadge><MDBBtn className='mx-2 btn-sm btn-rounded' outline onClick={() => copyToClipboard(id)}>Copy it! <MDBIcon fas icon="paste"/></MDBBtn></MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>)
        })}
    </MDBRow>
  );
}