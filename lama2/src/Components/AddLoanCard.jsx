import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBSelect, MDBRange } from 'mdb-react-ui-kit';
import Card from '../Assets/Images/Credit-card.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function AddLoanCard() {
  const [loanType, setLoanType] = useState("");
  const [loanDuration, setLoanDuration] = useState(0);
  const [error, setError] = useState("")
  const backendURL = "http://localhost:8081/loancards/apply"

  function handleSubmit(){
    axios.post(backendURL,
      {
        loanType: loanType,
        loanDuration: loanDuration
      },{headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}})
      .then((response) => {console.log("Loan Card Added !!");
      toast('🦄 Loan Card Added !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });})
      .catch((err)=> {
        toast('🦄 Unable to add Loan Card !', {
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
      <MDBCol col='10' md='6'>
          <img src={Card} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Loan Card Master Details</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' label='Loan Type' id='loanType' name='loanType' onChange={e => setLoanType(e.target.value)} type='text' size="md"/>
            <MDBRange
                defaultValue={10}
                id='loanDuration'
                name='loanDuration'
                label='loanDuration'
                onChange={e => setLoanDuration(e.target.value)}
                min={1}
                max={24}
            />
            <br/><br/>
            <MDBBtn className="mb-4 w-100" type="submit" onClick ={handleSubmit}>Add Loan Card Details</MDBBtn>    
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