import { React, useState, useEffect } from 'react';
import '../styles/Profile.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Topbar from '../components/Topbar/Topbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { act } from 'react';
import AccountSettings from '../components/AccountSettings/AccountSettings';
import PaymentHistory from '../components/PaymentHistory/PaymentHistory';
import GeneratedImage from '../components/GeneratedImage/GeneratedImage';


export default function Profile() {

    const { activepage } = useParams();
    // alert(activepage)


  return (
    <div>
        {/* <div>Profile, showing {activepage}</div> */}
        <Topbar/>
        <div className="profile-banner">
          <h1>My account</h1>
          <h3>Username</h3>
        </div>
        <div>
            <Container style={{ marginTop: '50px' }}>
              <Row>
                  <Col md={4} className="left">
                    <Sidebar activepage={activepage}/>
                  </Col>

                  <Col md={8} className="right">
                    {activepage === 'accountsettings' && <AccountSettings/>}
                    {activepage === 'paymenthistory' && <PaymentHistory/>}
                    {activepage === 'generatedimage' && <GeneratedImage/>}
                  </Col>

              </Row>
            </Container>
            
        </div>
        <Footer/>
    </div>
  );
}
