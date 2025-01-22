import { React, useState, useEffect } from 'react';
import '../styles/Purchase.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Topbar from '../components/Topbar/Topbar';
import Footer from '../components/Footer/Footer';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { act } from 'react';



export default function Purchase() {

  return (
    <div>
        <Topbar/>
        <div className="purchase-banner">
          <h1>Nap lan dau de nhan ve nhieu uu dai</h1>
          <h3>Username</h3>
        </div>
        <div className="purchase-body">
            <div className="purchase-wrapper">
                <h2>Nap tien vao</h2>

                <div className="purchase-price">
                    <h1>500k</h1> <p>/ngay</p>
                </div>

                <div className="purchase-interest">
                    <h4>Quyen loi</h4>
                    <p>👉Ban dep trai👈</p>
                    <p>👉Khong quang cao👈</p>
                    <p>👉Dep trai bat cu khi nao ban muon👈</p>
                    <p>👉Thay doi vo so kieu toc khong gioi han👈</p>
                </div>
                
                <button type='submit'>Nap luon</button>
                        
            </div>
        </div>
        <Footer/>
    </div>
  );
}
