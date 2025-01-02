import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import choose_Pic from '../../assets/choosePic.png';
import anhbanh from '../../assets/anhbanh.png';
import dotxe from '../../assets/dotxe.png';
import hailong from '../../assets/hailong.png';
import HeaderFoot from '../HeaderFoot/HeaderFoot';

const Header = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={6}>
            <div className="head_left">
              <span className='h_subTitle'>Muon dep trai, toi 30shine</span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: 'rgb(127, 0, 255)' }}>NGo bA kHa</h1>
                <h1 style={{ color: '#3D3F42' }}>Muon dep trai</h1>
                <h1 style={{ color: '#3D3F42' }}>Toi ngay 30shine</h1>
              </div>
              <p className='text-secondary'>
                Anh Banh oi em cat toc giong anh, bo em dam em khong truot phat nao
              </p>
              {/* <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0'>order food</Button>
                <Button className='contact_btn'>contact us</Button>
              </div> */}
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                <img src={choose_Pic} alt="choose-Picture" className='head_rightImg' />
              </div>
            </div>
          </Col>
        </Row>


        <Row style={{ marginTop: '50px' }}>
          <Col md={4} >
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={anhbanh} alt="anhbanh" className='' style={{ width: '120px', height: '120px', objectFit: 'cover', marginRight: '10px' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>69+ Hairstyles</h5>
                  <p className='text-secondary'>Hon 69 kieu toc nhu long lon khac nhau cho ban lua chon Hon 69 kieu toc nhu long lon khac nhau cho ban lua chon</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={dotxe} alt="anhbanh" className='' style={{ width: '120px', height: '120px', objectFit: 'cover', marginRight: '10px' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Toc do cao</h5>
                  <p className='text-secondary'>Chi voi 30p nhu cat toc ngoai tiem, chung toi se cho ban xem ban se trong nhu the nao ma khong can cat toc ngoai tiem</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={hailong} alt="anhbanh" className='' style={{ width: '120px', height: '120px', objectFit: 'cover', marginRight: '10px' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Feedback
                    <small className='ms-3 fw-normal'>
                      <i className="fa-solid fa-star starr me-1"></i>
                      4.8 (25k)
                    </small></h5>
                  <p className='text-secondary'>"Toi rat hai long khi su dung dich vu cua khabanh.life" - anh Ngo Ba Kha, mot khach hang than thiet cua chung toi</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>

  )
}

export default Header