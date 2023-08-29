import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBSelect, MDBRange } from 'mdb-react-ui-kit';
import Card from '../Assets/Images/Credit-card.jpg';
import axios from 'axios';

function ApplyLoanCard() {
  const [employeeId, setemployeeId] = useState(sessionStorage.getItem("username"));
  const [loanType, setLoanType] = useState("Furniture");
  const [loanDuration, setloanDuration] = useState(0);
  const [interest, setinterest] = useState(0);
  const [itemID, setItemID] = useState("");
  const [issue_date, setissue_date] = useState(new Date());
  const backendURL = "http://localhost:8081/loanCards/apply";
  const authToken = "Bearer " + sessionStorage.getItem("authToken");
  console.log(authToken)
  const config = {
    headers:{'Content-Type' : 'application/json','Access-Control-Allow-Origin' : '*',Authorization :`${authToken}`}
  };
  console.log(config);
  console.log(sessionStorage.getItem('authToken'));
  function handleSubmit(){
    axios.post(backendURL,
      {
        user:{id: employeeId},
        type: loanType,
        duration: loanDuration,
        interest: interest,
        item : {id: itemID},
        issue_date: issue_date,
        issue_status:"P"

      },config)
      .then((response) => {console.log("Loan Card Added !!");
      window.location.href='/userDashboard';});
  }

  const getInterest = () => {
    const rateOfInterest =0.5;
    const calculatedInterest = (loanDuration*rateOfInterest + 7);
    setinterest(calculatedInterest);
    return calculatedInterest
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
      <MDBCol col='10' md='6'>
          <img src={Card} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3 className="mt-4 pt-4 fw-bolder">Apply Loan Card</h3>
            <br/>
            <MDBInput wrapperClass='mb-4' onChange={e => setemployeeId(e.target.value)} value={sessionStorage.getItem("username")} label='Employee ID' id='employeeId' name="employeeId" type='text' size="md" disabled/>
            <select label="Loan Type" name="loanType" id="loanType" onChange={e => setLoanType(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">6
              <option value="Furniture">Furniture</option>
              <option value="Crockery ">Crockery</option>
              <option value="Electrical">Electrical</option>
              <option value="Electronic">Electronic</option>
              <option value="Plastic">Plastic</option>
            </select>
            <MDBInput wrapperClass='mb-4' onChange={e=> setissue_date(e.target.value)} value={issue_date} label='Issue Date' id='issue_date' name='issue_date' type='date' size='md'/>
            <MDBInput wrapperClass='mb-4' onChange={e => {setloanDuration(e.target.value); getInterest();}} value={loanDuration} label='Loan Duration (in months)' id='loanDuration' name="loanDuration" type='number' size="md"/>
            {/* <MDBBtn onClick={getInterest}>Show Interest Rate</MDBBtn> */}
            {/* <br/> */}
            <MDBInput  wrapperClass='mb-4' value={interest} label='Interest Rate' id='interest_rate' disabled name='interest_rate' type='text' size='md'/>
            <MDBInput label='Paste Item ID' onChange={e => setItemID(e.target.value)} id='formControlLg' type='text' size="md"/>
            <br/>
            <MDBBtn className="mb-4 w-100" type="submit" onClick ={handleSubmit}>Apply</MDBBtn>    
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default ApplyLoanCard;