import './Info.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Info = () => {

    const [name, setName] = useState(localStorage.getItem('name'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [number, setNumber] = useState(localStorage.getItem('number'));

    const [nameClass, setNameClass] = useState('valid-input');
    const [emailClass, setEmailClass] = useState('valid-input');
    const [phoneClass, setPhoneClass] = useState('valid-input');

    const verifyName = () => { return name !== null && name.length != 0; }
    const verifyEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const verfiyNumber = () => { return number != null && number.length == 10};

    const validateForm = () => {
        return verifyName() && verfiyNumber() && verifyEmail();
    }

    return (
        <div className="info-container">
            <div className="personal-info">
                <h1>Personal Info</h1>
                <p>Please provide your name, email, address, and phone number.</p>
            </div>
            <div className="personal-info-form">
                <div className="input-label">
                    <label>
                        Name 
                        <span
                            className={nameClass === 'valid-input' ? 'invalid-span' : 'valid-span'}>
                            {'Invalid Name'}  
                        </span>
                    </label>
                    <input 
                        type="text" 
                        placeholder='e.g. Stephen King'
                        onChange={(e) => {
                            localStorage.setItem('name', e.target.value);
                            setName(e.target.value);
                        }}
                        className={nameClass}
                        value={name}
                    />
                </div>
                <div className="input-label">
                    <label>
                        Email Address
                        <span
                            className={emailClass === 'valid-input' ? 'invalid-span' : 'valid-span'}
                            >
                            Invalid Email Address
                        </span>
                    </label>
                    <input 
                        type="email" 
                        placeholder='e.g. stephenking@lorem.com' 
                        onChange={(e) => {
                            setEmail(e.target.value)
                            localStorage.setItem('email',e.target.value);
                        }}
                        className={emailClass}
                        value={email}
                    />
                </div>
                <div className="input-label">
                    <label>
                        Phone Number
                        <span
                            className={phoneClass === 'valid-input' ? 'invalid-span' : 'valid-span'}>
                            Invalid phone number
                        </span>
                    </label>
                    <input 
                        type="text" 
                        placeholder='e.g. +1 234 567 890'
                        onChange={(e) => {
                            localStorage.setItem('number', e.target.value);
                            setNumber(e.target.value)
                        }}
                        className={phoneClass}
                        value={number}
                    />
                </div>
            </div>
            <div className="btn-container">
            <Link to={validateForm() ? 'select-plan' : '/'} className='link-btn'>
            <button 
                type='submit'
                className='next-step-btn'
                onClick={() => {
                    setNameClass(verifyName() ? 'valid-input' : 'invalid-input')
                    setEmailClass(verifyEmail() ? 'valid-input' : 'invalid-input')
                    setPhoneClass(verfiyNumber() ? 'valid-input' : 'invalid-input');
                }}
            >
                Next Step
            </button>
            </Link>
            </div>
        </div>
    )
}

export default Info;