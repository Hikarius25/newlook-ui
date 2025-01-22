import './Topbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/logo.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


const Topbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-transparent shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/ ">
            <img src={logo} alt="logo" style={{width:"25%", height:"100%", objectFit:'cover'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="/function" className='text-secondary fw-bold'>Change hairstyle</Nav.Link>
              <Nav.Link href="#" className='text-secondary fw-bold'>Hairstyles</Nav.Link>
              <Nav.Link href="#" className='text-secondary fw-bold'>About Us</Nav.Link>
              <Nav.Link as={Link} to="/purchase" className='text-secondary fw-bold'>Purchase</Nav.Link>
            
              <Dropdown align="end">
                <Dropdown.Toggle className="dropdown-toggle">User Options</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/login" className="dropdown-options">Login</Dropdown.Item>

                  <Dropdown.Item as={Link} to="/register" className="dropdown-options">Register</Dropdown.Item>

                  <Dropdown.Item as={Link} to="/profile" className="dropdown-options">Profile</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar