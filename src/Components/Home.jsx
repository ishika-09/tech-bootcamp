import React from 'react'
import Navbar from '../Components/Navbar'
import Login from './Login'
import RegisterUser from './RegisterUser'
import AddLoanCard from './AddLoanCard'
import AddItems from './AddItems'
import Bank from "../Assets/Images/bank.jpg"
import LoanHistory from './LoanHistory'

import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBRadio } from 'mdb-react-ui-kit';

export default function Home() {
  return (
            <>
                {/* <img src={Bank} class="img-fluid" alt="Sample image" width="100%"/> */}
                <LoanHistory/>
            </>
            
  )
}
