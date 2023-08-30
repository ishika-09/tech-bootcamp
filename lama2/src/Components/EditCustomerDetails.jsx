import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBRadio } from 'mdb-react-ui-kit';
import User from '../Assets/Images/userRegister.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


function EditCustomerDetails() 
{
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");   
  const [customerDetails, setCustomerDetails] = useState({});
  const [designation,setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [dob,setDob] = useState(new Date());
  const [doj,setDoj] = useState(new Date());
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [gender, setGender] = useState("");
  const [error, setError] = useState("")
  const backendURL = "http://localhost:8081/users/" + id;
  function handleSubmit(){
    axios.put(backendURL,
      {
        dob : dob,
        doj : doj,
        name : name,
        designation : designation,
        department : department,
        contact : contact,
        valid:1,
        gender : gender
      },{headers:{"Content-Type" : "application/json", Authorization : `Bearer ${sessionStorage.getItem("authToken")}`}})
      .then((response) => {console.log("Customer Updated");
      toast('🦄 Customer Details Updated !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      window.location.href='/adminDashboard'
      })
      .catch((err)=> {
        toast('🦄 Unable to Update Customer !', {
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

    axios.get(backendURL)
    .then(response => {
        setCustomerDetails(response.data);
        setName(customerDetails.name);
        setDepartment(customerDetails.department);
        setDesignation(customerDetails.designation);
        setDob(customerDetails.dob);
        setDoj(customerDetails.doj);
        setContact(customerDetails.contact);
        setGender(customerDetails.gender);
    })
    .catch((err)=> {
        setError(err.message);
        console.log(err.message);
        window.location.href = "http://localhost:3000/error";
      });



  function handleGenderChange(e){
    if(e.target.value=="option1")
      setGender("Male")
    else
      setGender("Female")
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
            <h3>Edit Customer Details</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' defaultValue={customerDetails.name} onChange={e => setName(e.target.value)} value={name} label='Employee Name' id='userUSername' name="userUSername" type='text' size="md"/>
            {/* <MDBInput wrapperClass='mb-4' onChange={e => setid(e.target.value)} value={id} label='User ID' id='id' name="id" type='text' size="md"/> */}
            <MDBInput wrapperClass='mb-4' defaultValue={customerDetails.contact} onChange={e => setContact(e.target.value)} value={contact} label='Contact No.' id='contact' name="contact" type='number' size="md"/>
            <select label="Designation" defaultValue={customerDetails.designation} name="Designation" id="designation" onChange={e => setDesignation(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="Program Associate">Program Associate</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Senior Software Engineer">Senior Software Engineer</option>
              <option value="Manager">Manager</option>
              <option value="Senior Manager">Senior Manager</option>
            </select>
            <select label="Department" defaultValue={customerDetails.department} name="department" id="department" onChange={e => setDepartment(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="DTI">DTI</option>
              <option value="CSBBT">CSBBT</option>
              <option value="EFT">EFT</option>
              <option value="TCO">TCO</option>
              <option value="CT">CT</option>
            </select>
            <MDBInput wrapperClass='mb-4' defaultValue={customerDetails.dob} onChange={e => setDob(e.target.value)} value={dob} label='dob' id='formControlLg' type='date' size="md"/>
            <MDBInput wrapperClass='mb-4' defaultValue={customerDetails.doj} onChange={e => setDoj(e.target.value)} value={doj} label='doj' id='formControlLg' type='date' size="md"/>
            <MDBRadio name='inlineRadio' onSelect={e => handleGenderChange(e)} id='inlineRadio1' value='option1' label='Male' inline />
            <MDBRadio name='inlineRadio' onSelect={e => handleGenderChange(e)} id='inlineRadio2' value='option2' label='Female' inline />
            <br/><br/>
            <MDBBtn type="submit" onClick ={handleSubmit
            } className="mb-4 w-100">Edit Details</MDBBtn>    
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
          <img src={User} className="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default EditCustomerDetails;