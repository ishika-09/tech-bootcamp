import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBRadio } from 'mdb-react-ui-kit';
import User from '../Assets/Images/userRegister.jpg';
import { useState } from 'react';
import axios from 'axios';


function RegisterUser() 
{
  const [employeeId,setEmployeeId] = useState(0);
  const [designation,setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [dob,setDob] = useState(new Date());
  const [doj,setDoj] = useState(new Date());
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const backendURL = "http://localhost:8081/users/register";
  function handleSubmit(){
    axios.post(backendURL,
      {
        id : employeeId,
        dob : dob,
        doj : doj,
        name : name,
        designation : designation,
        department : department,
        gender : gender
      },{headers:{"Content-Type" : "application/json"}})
      .then((response) => {console.log(dob)});
  }
  function handleGenderChange(e){
    if(e.target.value=="option1")
      setGender("Male")
    else
      setGender("Female")
  }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>


        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Customer Master Data Details</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' onChange={e => setEmployeeId(e.target.value)} value={employeeId} label='Employee Id' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setName(e.target.value)} value={name} label='Employee Name' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setDesignation(e.target.value)} value={designation} label='Designation' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setDepartment(e.target.value)} value={department} label='Departament' id='formControlLg' type='text' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setDob(e.target.value)} value={dob} label='Date of Birth' id='formControlLg' type='date' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setDoj(e.target.value)} value={doj} label='Date of Joining' id='formControlLg' type='date' size="md"/>
            <MDBRadio name='inlineRadio' onSelect={e => handleGenderChange(e)} id='inlineRadio1' value='option1' label='Male' inline />
            <MDBRadio name='inlineRadio'onSelect={e => handleGenderChange(e)} id='inlineRadio2' value='option2' label='Female' inline />
            <br/><br/>
            <MDBBtn type="submit" onClick ={handleSubmit
            } className="mb-4 w-100">Add Customer Details</MDBBtn>    
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
          <img src={User} className="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterUser;