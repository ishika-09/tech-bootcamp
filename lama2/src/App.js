// import {Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import RegisterUser from './Components/RegisterUser';
import AddItems from './Components/AddItems';
import Navbar from './Components/Navbar'
import ViewEmployeeDetails from './Components/ViewEmployeeDetails';
import ViewLoanCards from './Components/ViewLoanCards';
import ViewItems from './Components/ViewItems';
import ViewAppliedLoans from './Components/ViewAppliedLoans';
import PurchaseHistory from './Components/PurchaseHistory';
import UserDashboard from './Components/UserDashboard';
import AdminDashboard from './Components/AdminDashboard';
import Footer from './Components/Footer';
import PendingLoanRequests from './Components/PendingLoanRequests';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplyLoanCard from './Components/ApplyLoanCard';
import UserSignUp from './Components/UserSignUp';

function App() {
  return (
  <>
  <Navbar/>
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/login" Component={Login}/>
      <Route path="/registerUser" Component={RegisterUser}/>
      <Route path="/signup" Component={UserSignUp}/>
      <Route path="/addItem" Component={AddItems}/>
      <Route path="/applyLoanCard" Component={ApplyLoanCard}/>
      <Route path="/adminDashboard" element={<AdminDashboard/>}/>
      <Route path="/userDashboard" element={<UserDashboard/>}/>
      <Route path="/pendingLoanRequests" element={<PendingLoanRequests/>}/>
      <Route path="/viewLoanCards" element={<ViewLoanCards/>}/>
      <Route path="/viewEmployeeDetails" element={<ViewEmployeeDetails/>}/>
      <Route path="/viewItems" element={<ViewItems/>}/>
      <Route path="/viewAppliedLoans" element={<ViewAppliedLoans/>}/>
      <Route path="/purchaseHistory" element={<PurchaseHistory/>}/>
    </Routes> 
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
