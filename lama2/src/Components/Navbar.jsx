import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Wallet from "../Assets/Images/wallet.png"
import Man from "../Assets/Images/man.png"
import Button from 'react-bootstrap/Button';
import {FcBusinessman} from 'react-icons/fc';
import {IconContext} from 'react-icons';

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
          <Nav className="ms-auto">
            <Nav.Link href="/" className='text-white ml-auto'><Button className="primary"><b>Home</b></Button></Nav.Link>
            {sessionStorage.getItem('username') ? 
                  <>
                   {sessionStorage.getItem("role") == 'user' ? <Nav.Link href="userDashboard/" className='text-white'><Button className="primary"><b>Dashboard</b></Button></Nav.Link>: <Nav.Link href="/adminDashboard" className='text-white'><Button className="primary"><b>Dashboard</b></Button></Nav.Link>}
                   <Button><b>Hi, {sessionStorage.getItem('username')}</b>
                   <IconContext.Provider value={{ size: '3em'}}>
                    <span>
                      <FcBusinessman />
                    </span>
                  </IconContext.Provider>
                   </Button>
                   <Button className="m-2" variant="danger" href="/logout"><b>Logout</b></Button>
                  </> : 
                  <>
                    <Button className="m-2" variant="danger" href="/login"><b>Login</b></Button>
                  </>
}

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;