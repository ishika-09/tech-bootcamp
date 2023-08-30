import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBSelect, MDBCheckbox, MDBRadio, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu, MDBDropdown } from 'mdb-react-ui-kit';
import User from '../Assets/Images/userRegister.jpg';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


function ForgotPassword() 
{
  const [employeeId, setEmployeeID] = useState("");
  const [dob, setDob] = useState(new Date());
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const backendURL = "http://localhost:8081/users/forgotPassword";
  function handleSubmit(){
    axios.post(backendURL,
      {
        employeeId: employeeId,
        dob: dob,
        newPassword: newPassword
      },{headers:{"Content-Type" : "application/json", "Authorization" : "Bearer " + sessionStorage.getItem("authToken")}})
      .then((response) => {console.log("New Password Added !!");
      toast('🦄 Password Resetted !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      window.location.href='/login'
    })
      .catch((err)=> {
        toast('🦄 Unable to Reset Password !', {
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
            <h3>Forgot Password</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' onChange={e => setEmployeeID(e.target.value)} value={employeeId} label='Employee ID' id='employeeID' name="employeeID" type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setDob(e.target.value)} value={dob} label='Date of Birth' id='dob' name="name" type='date' size="md"/>
            <MDBInput wrapperClass='mb-4'  onChange={e => setNewPassword(e.target.value)} value={newPassword} label='New Password' id='newPassword' name="newPassword" type='password'/>
            <br/><br/>
            <MDBBtn type="submit" onClick ={handleSubmit
            } className="mb-4 w-100">Change Password</MDBBtn>    
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" width="90%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default ForgotPassword;