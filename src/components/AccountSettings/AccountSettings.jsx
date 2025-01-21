import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AccountSettings.css';



const AccountSettings = ({ activepage }) => {
  return (
    <div className="account-settings">
      <h2 >Personal Information</h2>

      <div className="form">
        <div className="form-group">
          <label htmlFor='name'>Name <span>*</span></label>
          <input type='text' name='name' id='name' placeholder='Full name'/>
        </div>

        <div className="form-group">
          <label htmlFor='phone'>Phone Number <span>*</span></label>
          <input type='text' name='phone' id='phone' placeholder='Phone number'/>
        </div>

        <div className="form-group">
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email' placeholder='Email address'/>
        </div>

        
      </div>
      <button className='save-btn'>Save Changes</button>
    </div>
    
  )
}

export default AccountSettings