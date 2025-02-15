// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import './AccountSettings.css';



// const AccountSettings = ({ activepage }) => {
//   return (
//     <div className="account-settings">
//       <h2 >Personal Information</h2>

//       <div className="form">
//         <div className="form-group">
//           <label htmlFor='name'>Name <span>*</span></label>
//           <input type='text' name='name' id='name' placeholder='Full name'/>
//         </div>

//         <div className="form-group">
//           <label htmlFor='phone'>Phone Number <span>*</span></label>
//           <input type='text' name='phone' id='phone' placeholder='Phone number'/>
//         </div>

//         <div className="form-group">
//           <label htmlFor='email'>Email <span>*</span></label>
//           <input type='email' name='email' id='email' placeholder='Email address'/>
//         </div>

        
//       </div>
//       <button className='save-btn'>Save Changes</button>
//     </div>
    
//   )
// }

// export default AccountSettings

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AccountSettings.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    axios.get('http://localhost:3000/account')
      .then(response => {
        console.log("API Response:", response.data); // 🟢 Debug API response
        if (response.data.account && response.data.account.length > 0) {
          const account = response.data.account[0];
          setFormData({
            name: account.name || '',
            phone: account.phone || '',
            email: account.mail || ''
          });
        }
      })
      .catch(error => console.error('❌ Error fetching account data:', error));
  }, []);

  return (
    <div className="account-settings">
      <h2>Personal Information</h2>

      <div className="form">
        <div className="form-group">
          <label htmlFor='name'>Name <span>*</span></label>
          <input type='text' id='name' value={formData.name} />
        </div>

        <div className="form-group">
          <label htmlFor='phone'>Phone Number <span>*</span></label>
          <input type='text' id='phone' value={formData.phone} />
        </div>'
        '

        <div className="form-group">
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' id='email' value={formData.email} />
        </div>
      </div>
      <button className='save-btn'>Save Changes</button>
    </div>
  );
};

export default AccountSettings;
