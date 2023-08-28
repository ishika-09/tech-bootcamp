import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Wallet from "../Assets/Images/wallet.png"
import Man from "../Assets/Images/man.png"
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className='text-white'>
          <img
              src={Wallet}
              width="40"
              height="40"
              className="d-inline-block align-center"
          />
          &nbsp;&nbsp;LoanHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='align-items-end'>
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            {sessionStorage.getItem('username') ? 
                  <>
                   {sessionStorage.getItem("role") == 'user' ? <Nav.Link href="userDashboard/" className='text-white'>Dashboard</Nav.Link>: <Nav.Link href="/adminDashboard" className='text-white'>Dashboard</Nav.Link>}
                   <Button className="m-2" variant="danger" href="/logout">Logout</Button>
                  </> : 
                  <>
                    <Button className="m-2" variant="danger" href="/login">Login</Button>
                  </>
}
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;