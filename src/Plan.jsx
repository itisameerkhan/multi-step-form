import { useState } from 'react';
import './Plan.css';
import Switch from './Component/Switch';
import { Link } from 'react-router-dom';

const Plan = () => {

    const [option, setOption] = useState(localStorage.getItem('option') || 1);
    const [price, setPrice] = useState(localStorage.getItem('clicked'));

    console.log('price -> ' + price);

    return (
        <div className="plan-container">
            <div className="title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="plan-options">
                <div className={`options ${option == 1 ? 'options-select' : 'none'}`}
                onClick={() => {
                    setOption(1); 
                    localStorage.setItem('option', 1);
                }} >
                    <img src="/src/assets/images/icon-arcade.svg" alt="" />
                    <div className="price">
                        <h4>Arcade</h4>
                        <p>{price === true ? '$9/mo' : '$90/year'}</p>
                    </div>
                </div>
                <div className={`options ${option == 2 ? 'options-select' : 'none'}`}
                onClick={() => {
                    setOption(2); 
                    localStorage.setItem('option', 2);
                }} >
                    <img src="/src/assets/images/icon-advanced.svg" alt="" />
                    <div className="price">
                        <h4>Advanced</h4>
                        <p>$12/mo</p>
                    </div>
                </div>
                <div className={`options ${option == 3 ? 'options-select' : 'none'}`}
                onClick={() => {
                    setOption(3); 
                    localStorage.setItem('option', 3);
                }} >
                    <img src="/src/assets/images/icon-pro.svg" alt="" />
                    <div className="price">
                        <h4>Pro</h4>
                        <p>$15/mo</p>
                    </div>
                </div>
            </div>
            <div className="plan-switch">
                <p>Monthly</p>
                <Switch />
                <p>Yearly</p>
            </div>
            <div className="plan-footer">
                <Link to={'/'} className='go-back'>Go Back</Link>
                <Link to={'/add-ons'}>
                    <button className='next-step-btn-1'>Next step</button>
                </Link>
            </div>
        </div>
    )
}

export default Plan;