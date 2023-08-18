import React, {useState} from 'react';
import {MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent,  MDBCol, MDBTabsPane, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
function Login() {
    const [justifyActive, setJustifyActive] = useState('tab1');;
    const [username, setUsername] = useState();
    const [password, setPasssword] = useState("");
    const [backendURL,setBackendURL] = useState("http://localhost:8081/users/login");

    const handleJustifyClick = (value) => {

      if(justifyActive === "tab1")
        setBackendURL("http://localhost:8081/users/login");
      else
        setBackendURL("http://localhost:8081/admins/login");
      if (value === justifyActive) {
        return;
      }
      

      setJustifyActive(value);
    };
    
    
    

    function handleSubmit(){
      axios.post(backendURL,{
        id:username,
        password:password
      },{headers:{"Content-Type":"application/json"}})
      .then(()=> {
        console.log("loginSuccessful");
        if(justifyActive === "tab1")
          window.location.href = '/userDashboard';
        else
          window.location.href = '/adminDashboard';
        
    });
    }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom container h-100">
      <MDBRow>
        <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" width="90%"/>
        </MDBCol>
        <MDBCol col='4' md='6' className='container-fluid'>
            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                User Login
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Admin Login
            </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>

            <MDBInput wrapperClass='mb-4' onChange={e=> setUsername(e.target.value)} value = {username} label='Username' id='form1' type='number'/>
            <MDBInput wrapperClass='mb-4' onChange={e=> setPasssword(e.target.value)} value = {password} label='Password' id='form2' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            {/* <MDBBtn className="mb-4 w-100">Sign in</MDBBtn> */}
            <MDBBtn type="submit" onClick ={handleSubmit
            } className="mb-4 w-100">Sign in</MDBBtn>

            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>

            <MDBInput wrapperClass='mb-4' onChange={e=> setUsername(e.target.value)} value = {username} label='Username' id='form1' type='number'/>
            <MDBInput wrapperClass='mb-4' onChange={e=> setPasssword(e.target.value)} value = {password} label='Password' id='form2' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            {/* <MDBBtn className="mb-4 w-100">Sign In</MDBBtn> */}
            <MDBBtn type="submit" onClick ={handleSubmit
            } className="mb-4 w-100">Sign in</MDBBtn>

            </MDBTabsPane>

        </MDBTabsContent>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Login;