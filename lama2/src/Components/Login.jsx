import React, {useState} from 'react';
import {MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent,  MDBCol, MDBTabsPane, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function Login() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom container h-100">
      <MDBRow>
        <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" width="90%"/>
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

            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

            <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>

            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>

            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
            <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100">Sign In</MDBBtn>

            </MDBTabsPane>

        </MDBTabsContent>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Login;