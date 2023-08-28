import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBRadio } from 'mdb-react-ui-kit';
import User from '../Assets/Images/userRegister.jpg';
import { useState } from 'react';
import axios from 'axios';


function RegisterUser() 
{
  const [designation,setDesignation] = useState("Program Associate");
  const [department, setDepartment] = useState("DTI");
 // const [id, setid] = useState(0);
  const [dob,setDob] = useState(new Date());
  const [doj,setDoj] = useState(new Date());
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [gender, setGender] = useState("Female");

  const backendURL = "http://localhost:8081/users/register";
  function handleSubmit(){
    axios.post(backendURL,
      {
        dob : dob,
        doj : doj,
        name : name,
        designation : designation,
        department : department,
        contact : contact,
        valid:1,
        //id : id,
        gender : gender
      },{headers:{"Content-Type" : "application/json"}})
      .then((response) => {console.log("Employee registered !!");
        window.location.href='/adminDashboard'});
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
            <MDBInput wrapperClass='mb-4' onChange={e => setName(e.target.value)} value={name} label='Employee Name' id='userUSername' name="userUSername" type='text' size="md"/>
            {/* <MDBInput wrapperClass='mb-4' onChange={e => setid(e.target.value)} value={id} label='User ID' id='id' name="id" type='text' size="md"/> */}
            <MDBInput wrapperClass='mb-4' onChange={e => setContact(e.target.value)} value={contact} label='Contact No.' id='contact' name="contact" type='number' size="md"/>
            <select label="Designation" name="Designation" id="designation" onChange={e => setDesignation(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="Program Associate">Program Associate</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Senior Software Engineer">Senior Software Engineer</option>
              <option value="Manager">Manager</option>
              <option value="Senior Manager">Senior Manager</option>
            </select>
            <select label="Department" name="department" id="department" onChange={e => setDepartment(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="DTI">DTI</option>
              <option value="CSBBT">CSBBT</option>
              <option value="EFT">EFT</option>
              <option value="TCO">TCO</option>
              <option value="CT">CT</option>
            </select>
            <MDBInput wrapperClass='mb-4' onChange={e => setDob(e.target.value)} value={dob} label='dob' id='formControlLg' type='date' size="md"/>
            <MDBInput wrapperClass='mb-4' onChange={e => setDoj(e.target.value)} value={doj} label='doj' id='formControlLg' type='date' size="md"/>
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