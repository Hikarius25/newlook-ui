import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import anhbanh from '../../assets/anhbanh.png';
import dotxe from '../../assets/dotxe.png';
import hailong from '../../assets/hailong.png';
import HeaderFoot from '../HeaderFoot/HeaderFoot';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleNavigateToFunction = (event) => {
    if (!isLoggedIn) {
      event.preventDefault();  // Ngăn chặn chuyển trang
      alert("Log in mới được xài mày");
    }
  };

  return (
    <div className='mt-5'>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={6}>
            <div className="head_left">
              <span className='h_subTitle'>Muon dep trai, toi 30shine</span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: 'rgb(127, 0, 255)' }}>Thử tóc tai</h1>
                <h1 style={{ color: '#3D3F42' }}>Tới ngay khabanh.life</h1>
              </div>
              <p className='text-secondary'>
                Chúng tôi (founder của khabanh.life) đẹp trai và bạn cũng vậy
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="dragdrop">
                <i className="fa-solid fa-cloud-arrow-down"></i>
                <h4>Drag and drop your file.</h4>
                <label htmlFor="upload-files">
                  <Link to="/function" className="upload-btn" onClick={handleNavigateToFunction}>
                    Upload Image
                  </Link>
                </label>
              </div>
            </div>
          </Col>
        </Row>

        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>
  );
};

export default Header;
