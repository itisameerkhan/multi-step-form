import './Info.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Info = () => {

    const [name, setName] = useState('nothingg');
    const [email, setEmail] = useState('nothing123@gmail.com');
    const [number, setNumber] = useState("xxxxxxxxxx");

    const verifyName = () => { return name.length > 3; }
    const verifyNumber = () => { return (number.length == 10); }
    const verifyEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const validateName = () => {
        if(name.length == 0) return 'This field is required'
        if(name.length < 3) return 'Minimum 3 characters required';
    }
    const verifyForm = () => {
        return verifyName() && name != 'nothingg' && verifyEmail() && email != 'nothing123@gmail.com' && verifyNumber() && number != '6969696969'
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
                            className={validateName() ? 'valid-span' : 'invalid-span'}>
                            {validateName()}
                        </span>
                    </label>
                    <input 
                        type="text" 
                        placeholder='e.g. Stephen King'
                        onChange={(e) => setName(e.target.value)}
                        className={verifyName() ? 'valid-input' : 'invalid-input'}
                    />
                </div>
                <div className="input-label">
                    <label>
                        Email Address
                        <span
                            className={verifyEmail() ? 'invalid-span' : 'valid-span'}
                            >
                            Invalid Email Address
                        </span>
                    </label>
                    <input 
                        type="email" 
                        placeholder='e.g. stephenking@lorem.com' 
                        onChange={(e) => setEmail(e.target.value)}
                        className={verifyEmail() ? 'valid-input' : 'invalid-input'}
                    />
                </div>
                <div className="input-label">
                    <label>
                        Phone Number
                        <span
                            className={verifyNumber() ? 'invalid-span' : 'valid-span'}>
                            Invalid phone number
                        </span>
                    </label>
                    <input 
                        type="text" 
                        placeholder='e.g. +1 234 567 890'
                        onChange={(e) => setNumber(e.target.value)}
                        className={verifyNumber() ? 'valid-input' : 'invalid-input'}
                    />
                </div>
            </div>
            <div className="btn-container">
            <Link to={verifyForm() ? 'select-plan' : '/'} className='link-btn'>
            <button 
                type='submit'
                className='next-step-btn'
                onClick={() => {
                    if(verifyForm() == false) {
                        if(name == 'nothingg') setName('');
                        if(email == 'nothing123@gmail.com') setEmail('');
                        if(number=='xxxxxxxxxx') setNumber('');
                    }
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