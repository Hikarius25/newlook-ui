import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import './Topbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/logo.png';
import axios from 'axios';

const Topbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    console.log("Logging out with tokens:", { token, refreshToken });

    if (!token || !refreshToken || token === "undefined" || refreshToken === "undefined") {
        console.error("Tokens are missing or undefined!");
        alert("Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.");
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/home");
        return;
    }

    try {
        const response = await axios.post(
            "http://localhost:10000/auth/logout",
            { token, refreshToken }, 
            {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json" 
                }
            }
        );

        console.log("Logout success:", response.data);

        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/home");
    } catch (error) {
        console.error("Logout failed:", error.response ? error.response.data : error);
        alert(`Logout failed: ${error.response?.data?.message || "Unknown error"}`);
    }
};



  const handleNavigateToFunction = (event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      alert("Log in mới được xài mày");
    }
  };

  return (
    <Navbar expand="lg" className="bg-transparent shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="logo" style={{ width: "25%", height: "100%", objectFit: 'cover' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
            <Nav.Link as={Link} to="/function" className='text-secondary fw-bold' onClick={handleNavigateToFunction}>Change hairstyle</Nav.Link>
            <Nav.Link href="#" className='text-secondary fw-bold'>Hairstyles</Nav.Link>
            <Nav.Link href="#" className='text-secondary fw-bold'>About Us</Nav.Link>
            <Nav.Link as={Link} to="/purchase" className='text-secondary fw-bold'>Purchase</Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle className="dropdown-toggle">User Options</Dropdown.Toggle>
              <Dropdown.Menu>
                {isLoggedIn ? (
                  <>
                    <Dropdown.Item as={Link} to="/profile" className="dropdown-options">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout} className="dropdown-options">Logout</Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item as={Link} to="/login" className="dropdown-options">Login</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register" className="dropdown-options">Register</Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
