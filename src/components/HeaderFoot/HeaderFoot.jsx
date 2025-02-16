import { Button, Col, Row } from 'react-bootstrap';
import './HeaderFoot.css';
import anhnhacem from '../../assets/anhnhacem.png';

const HeaderFoot = () => {
  return (
    <div>
      <Row className='imgContainer' style={{ marginTop: '50px', marginLeft: '-85px' }}>
        <Col md={7} >
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={anhnhacem} alt="header-footer" className='img-fluid' />
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div >
            <div >
              <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>Có thể bạn chưa biết: mái tóc chiếm 80% nhan sắc của đấng mày râu</h1>
              <p className='text-secondary my-4'>Khabanh.life is a unique website that uses artificial intelligence (AI) to help users transform their hairstyle quickly and effortlessly.</p>
              <p className='text-secondary'>With its user-friendly interface, the platform allows you to explore new hairstyles without stepping into a salon or making any permanent changes.</p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0' style={{ marginBottom: '10px' }}>contact us</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HeaderFoot