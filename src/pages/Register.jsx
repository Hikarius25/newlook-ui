// import { React, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';
// import '../styles/Register.css';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";


// export default function Register() {
    
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
   
//     const navigate = useNavigate();
     
//     const registerUser = (e) => {
//         e.preventDefault();
//         axios.post('', {
//             email: email,
//             password: password,
//             fullName: fullName
//         })
//         .then(function (response) {
//             console.log(response);
//             navigate("/login");
//         })
//         .catch(function (error) {
//             console.log(error, 'error');
//             if (error.response && error.response.status === 401) {
//                 alert("Invalid credentials");
//             }
//         });
//     };

//     const [type, setType] = useState('password');
//     const [icon, setIcon] = useState(eyeOff);

//     const handleToggle = () => {
//         if (type === 'password') {
//             setIcon(eye);
//             setType('text');
//         } else {
//             setIcon(eyeOff);
//             setType('password');
//         }
//     };

//     return (
//         <div className='register-body'>
//             <div className='register-wrapper'>
//                 <form onSubmit={registerUser}>
//                     <h1>Sign up for Khabanh</h1>

//                     <div className="register-input-box">
//                         <input 
//                             type="text"
//                             placeholder="Full name"
//                             onChange={(e) => setFullName(e.target.value)}
//                             required/>
//                     </div>

//                     <div className="register-input-box">
//                         <input 
//                             type="email"
//                             placeholder="Email address"
//                             onChange={(e) => setEmail(e.target.value)}
//                             required/>
//                     </div>

//                     <div className="register-input-box">
//                         <input type={type} name="password"
//                                 placeholder='Password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 autoComplete="current-password"/>
//                         <span
//                             style={{
//                                 position: 'absolute',
//                                 right: '20px',
//                                 top: '50%',
//                                 transform: 'translateY(-50%)',
//                             }}
//                             onClick={handleToggle}
//                         >
//                             <Icon icon={icon} size={25} />
//                         </span>
//                     </div>

//                     <button type='submit'>Sign Up</button>

//                     <div className="register-login">
//                         <p>Already have an account? <Link to="/login">Log in</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import axios from 'axios';
import '../styles/Register.css';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [inviteCode, setInviteCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:10000/user/new', {
                firstName,
                lastName,
                email,
                password,
                dateOfBirth,
                inviteCode
            });

            console.log(response.data);
            alert('Registration successful! Please log in.');
            navigate("/login");
        } catch (error) {
            console.error('Registration error:', error);
            if (error.response) {
                if (error.response.status === 400) {
                    setErrorMessage("Invalid input. Please check your details.");
                } else if (error.response.status === 409) {
                    setErrorMessage("Email already exists.");
                } else {
                    setErrorMessage("An error occurred. Please try again.");
                }
            } 
        } finally {
            setLoading(false);
        }
    };

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        setType(type === 'password' ? 'text' : 'password');
        setIcon(type === 'password' ? eye : eyeOff);
    };

    return (
        <div className='register-body'>
            <div className='register-wrapper'>
                <form onSubmit={registerUser}>
                    <h1>Sign up for Khabanh</h1>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="register-input-box">
                        <input 
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-input-box">
                        <input 
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-input-box">
                        <input 
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-input-box">
                        <input 
                            type={type} 
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                        />
                        <span
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                            onClick={handleToggle}
                        >
                            <Icon icon={icon} size={25} />
                        </span>
                    </div>

                    <div className="register-input-box">
                        <input 
                            type="date"
                            placeholder="Date of Birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                        />
                    </div>

                    <div className="register-input-box">
                        <input 
                            type="text"
                            placeholder="Invite Code"
                            value={inviteCode}
                            onChange={(e) => setInviteCode(e.target.value)}
                        />
                    </div>

                    <button type='submit' disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>

                    <div className="register-login">
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

