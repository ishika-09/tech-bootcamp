import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBRadio, MDBRange } from 'mdb-react-ui-kit';
import Cart from '../Assets/Images/cart.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function AddItems() {

  const [itemCategory, setItemCategory] = useState("Furniture");
  //const [itemId, setItemId] = useState();
  const [itemDescription, setItemDescription] = useState("");
  const [itemValue, setItemValue] = useState(0);
  const [itemMake, setItemMake] = useState("");
  const [itemImg, setItemImg] = useState("");
  const [error, setError] = useState("")
  const backendURL = "http://localhost:8081/items/add";
  function handleSubmit(){
    axios.post(backendURL,
      {
        category : itemCategory,
        description : itemDescription,
        value : itemValue,
        make : itemMake,
        // itemImg: itemImg,
        issue_status: "N"
      },{headers:{"Content-Type" : "application/json",'Access-Control-Allow-Origin':'*',Authorization : `Bearer ${sessionStorage.getItem("authToken")}`}})
      .then((response) => {console.log("Item added !!");
      toast('🦄 Item Added !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      window.location.href='/adminDashboard';})
      .catch((err)=> {
        toast('🦄 Unable to add Item !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setError(err.message);
        console.log(err.message);
        window.location.href = "http://localhost:3000/error";
      });
  }



  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
      <MDBRow>

        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Item Master Data Details</h3>
            <br/>
            <select label="Item Category" name="itemCategory" onChange={e => setItemCategory(e.target.value)} id="itemCategory" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="Furniture">Furniture</option>
              <option value="Crockery ">Crockery</option>
              <option value="Electrical">Electrical</option>
              <option value="Electronic">Electronic</option>
              <option value="Plastic">Plastic</option>
            </select>
            <MDBInput wrapperClass='mb-4' label='Item Description' onChange={e => setItemDescription(e.target.value)} id='formControlLg' type='textarea' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Item Image URL' onChange={e => setItemImg(e.target.value)} id='formControlLg' type='textarea' size="md"/>
            <MDBInput wrapperClass='mb-4' label='Item Value' onChange={e => setItemValue(e.target.value)} id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mt-2 mb-4' label='Item Make' onChange={e => setItemMake(e.target.value)} id='formControlLg' type='text' size="md"/>
            <MDBBtn className="mb-4 w-100" type="submit" onClick={handleSubmit}>Add Item Details</MDBBtn>    
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