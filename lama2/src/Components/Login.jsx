import React, {useState} from 'react';
import {MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent,  MDBCol, MDBTabsPane, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


function Login() {
    const [justifyActive, setJustifyActive] = useState('tab1');;
    const [username, setUsername] = useState();
    const [password, setPasssword] = useState("");
    const [error, setError] = useState("")
    const [backendURL,setBackendURL] = useState("http://localhost:8081/users/login");

    const handleJustifyClick = (value) => {
      setJustifyActive(value);
      if(justifyActive === "tab1")
        setBackendURL("http://localhost:8081/users/login");
      else
        setBackendURL("http://localhost:8081/admins/login");
      
    };
    
    
    

    function handleSubmit(){
      axios.post(backendURL,{
        id:username,
        password:password
      },{headers:{"Content-Type":"application/json"}})
      .then((response)=> {
        toast('🦄 Login Successful !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log(response);
        sessionStorage.setItem("username", response.data.username);
        sessionStorage.setItem("role", response.data.roles);
        sessionStorage.setItem("authToken",response.data.accessToken);
        if(justifyActive === "tab1"){
          
          window.location.href = '/userDashboard';
          console.log(response);
        }
        else{
          window.location.href = '/adminDashboard';
          console.log(response);
        }
        
    })
    .catch((err)=> {
      toast('🦄 Login Failed !', {
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
    <MDBContainer fluid className="p-3 my-5 h-custom container h-100">
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

            <MDBInput wrapperClass='mb-4' onChange={e=> setUsername(e.target.value)} value = {username} label='Username' id='userUsername' type='number'/>
            <MDBInput wrapperClass='mb-4' onChange={e=> setPasssword(e.target.value)} value = {password} label='Password' id='userPassword' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4">
                {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
                <a href="/forgotPassword">Forgot password?</a>

                  <p>Not a member? <a href="/signup">Register</a></p>
            </div>

            {/* <MDBBtn className="mb-4 w-100">Sign in</MDBBtn> */}
            <MDBBtn type="submit" onClick ={handleSubmit
            } className="mb-4 w-100">Sign in</MDBBtn>

            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>

            <MDBInput wrapperClass='mb-4' onChange={e=> setUsername(e.target.value)} value = {username} label='Username' id='adminUsername' type='text'/>
            <MDBInput wrapperClass='mb-4' onChange={e=> setPasssword(e.target.value)} value = {password} label='Password' id='adminPassword' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4">
                {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
                {/* <a href="!#">Forgot password?</a> */}
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