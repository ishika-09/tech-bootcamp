import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBSelect, MDBRange } from 'mdb-react-ui-kit';
import Card from '../Assets/Images/Credit-card.jpg';
import axios from 'axios';

function ApplyLoanCard() {
  const [loanType, setLoanType] = useState("");
  const [loanDuration, setLoanDuration] = useState(0);
  const backendURL = "http://localhost:8081/loancards/apply"

  function handleSubmit(){
    axios.post(backendURL,
      {
        loanType: loanType,
        loanDuration: loanDuration
      },{headers:{"Content-Type" : "application/json"}})
      .then((response) => {console.log("Loan Card Added !!")});
  }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
      <MDBCol col='10' md='6'>
          <img src={Card} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5'>
            <h3>Loan Card</h3>
            <br/>
            <select label="Loan Type" name="loanType" id="loanType" onChange={e => setLoanType(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="Furniture">Furniture</option>
              <option value="Crockery ">Crockery</option>
              <option value="Electrical">Electrical</option>
              <option value="Electronic">Electronic</option>
              <option value="Plastic">Plastic</option>
            </select>
            <MDBRange
                defaultValue={10}
                id='loanDuration'
                name='loanDuration'
                label='Loan Duration'
                onChange={e => setLoanDuration(e.target.value)}
                min={1}
                max={24}
            />
            <br/><br/>
            <MDBBtn className="mb-4 w-100" type="submit" onClick ={handleSubmit}>Apply</MDBBtn>    
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default ApplyLoanCard;