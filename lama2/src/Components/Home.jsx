import Footer from "./Footer";
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Bank from "../Assets/Images/bank.jpg"
import Wallet from "../Assets/Images/wallet.png"
import Typewriter from "typewriter-effect";

function Home(){
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>

        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5 pl-5'>
          <div style={{fontSize: "80px"}} className="text-primary fw-bolder">
            <img
              src={Wallet}
              className="d-inline-block align-center"
            />
            <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString("Welcome to LoanHub")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcome to LoanHub")
                    .start();
            }}
            />
            </div>
              <h5 className="fw-bold py-5">Elevate Your Loan Experience: Seamlessly Manage Your Finances with Our Innovative Loan Management App!</h5>
          </div>

        </MDBCol>
        <MDBCol col='10' md='6'>
          <img src={Bank} class="img-fluid" alt="Sample image" width="80%"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    )
}

export default Home;