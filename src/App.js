import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import RegisterUser from './Components/RegisterUser';
import AddItems from './Components/AddItems';
import AddLoanCard from './Components/AddLoanCard';
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/login" Component={Login}/>
          <Route path="/registerUser" Component={RegisterUser}/>
          <Route path="/addItems" Component={AddItems}/>
          <Route path="/addLoanCard" Component={AddLoanCard}/>
      </Routes>
    </>
  );
}

export default App;
