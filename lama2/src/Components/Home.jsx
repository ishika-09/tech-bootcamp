import Footer from "./Footer";
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Bank from "../Assets/Images/bank.jpg"

function Home(){
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>

        <MDBCol col='4' md='6'>
          <div className='w- 100 m-5 pl-5'>
              <h1 className="text-primary fw-bolder">Welcome to LoanHub ...</h1>
              <h5 className="fw-bold py-5">Elevate Your Loan Experience: Seamlessly Manage Your Finances with Our Innovative Loan Management App!</h5>
                <p><h5>Why Choose Our Loan Management System?</h5><br/>

🔒 <b className="py-2">Secure and User-Friendly:</b><br/> Your financial security is our top priority. Our platform employs state-of-the-art security measures to ensure your personal and financial information remains safe and confidential. Plus, our user-friendly interface makes managing your loans a breeze.
<br/>
💼<b className="py-2"> Comprehensive Loan Dashboard:</b><br/> Get a holistic view of all your loans in one place. Monitor repayment schedules, interest rates, and outstanding balances effortlessly.
<br/>
📅 <b className="py-2">Automated Reminders:</b><br/> Say goodbye to missed payments! Our system sends you automated reminders, helping you stay on top of your repayment schedule and avoid unnecessary fees.
<br/>
🔄 <b className="py-2">Flexible Repayment Options:</b><br/> Life is full of surprises, and we're here to help. Adjust your repayment plans, explore refinancing options, and make extra payments with ease.
<br/>
📊 <b className="py-2">Financial Insights:</b><br/> Make informed decisions with our insightful analytics. Track your spending patterns, assess your financial health, and plan for a brighter future.
<br/>
💬 <b className="py-2">Dedicated Support:</b><br/> Have questions? Our knowledgeable support team is just a click away. Whether you need assistance navigating the platform or understanding your loan options, we're here to help.
<br/>
🌐<b className="py-2"> Anytime, Anywhere Access:</b><br/> Manage your loans on your terms. Our platform is accessible from any device with an internet connection, giving you the freedom to stay in control wherever you go.</p>
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