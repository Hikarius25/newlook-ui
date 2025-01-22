import { React, useState, useEffect } from 'react';
import '../styles/Function.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Topbar from '../components/Topbar/Topbar';
import Footer from '../components/Footer/Footer';
import UploadImage from '../components/UploadImage/UploadImage';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { act } from 'react';



export default function Function() {

  return (
    <div>
        <Topbar/>
        <div className="function-upload">
            <UploadImage/>
        </div>
        <Footer/>
    </div>
  );
}
