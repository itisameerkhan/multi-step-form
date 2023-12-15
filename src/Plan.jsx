import { useState } from 'react';
import './Plan.css';
import Switch from './Component/Switch';
import { Link } from 'react-router-dom';
import Arcade from '../images/icon-arcade.svg';
import Advanced from '../images/icon-advanced.svg';
import Pro from  '../images/icon-pro.svg';

const Plan = () => {

    const [option, setOption] = useState(localStorage.getItem('option') || 1);
    const [price, setPrice] = useState(true);

    if(option === 1) {
        if(price) localStorage.setItem('plan', JSON.stringify(['Arcade (Yearly)', "$90/yr",90]));
        else localStorage.setItem('plan', JSON.stringify(['Arcade (Monthly)', '$9/mo',9]));
    }
    if(option === 2) {
        if(price) localStorage.setItem('plan',  JSON.stringify(['Advanced (Yearly)', '$120/yr',120]));
        else localStorage.setItem('plan', JSON.stringify(['Advanced (Monthly)', '$12/mo',12]));
    }
    if(option === 3) {
        if(price) localStorage.setItem('plan',  JSON.stringify(['Pro (Yearly)', '$150/yr',150]));
        else localStorage.setItem('plan', JSON.stringify(['Pro (Monthly)', '$15/mo',15]));
    }

    localStorage.setItem('price', price);

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
                    <img src={Arcade} alt="" />
                    <div className="price">
                        <h4>Arcade</h4>
                        <p>{price === true ? '$90/year' : '$9/mo'}</p>
                        <h3 className={price ? 'price-p' : 'hide'}>2 months free</h3>
                    </div>
                </div>
                <div className={`options ${option == 2 ? 'options-select' : 'none'}`}
                onClick={() => {
                    setOption(2); 
                    localStorage.setItem('option', 2);
                }} >
                    <img src={Advanced} alt="" />
                    <div className="price">
                        <h4>Advanced</h4>
                        <p>{price == true ? '$120/yr' : '$12/mo'}</p>
                        <h3 className={price ? 'price-p' : 'hide'}>2 months free</h3>
                    </div>
                </div>
                <div className={`options ${option == 3 ? 'options-select' : 'none'}`}
                onClick={() => {
                    setOption(3); 
                    localStorage.setItem('option', 3);
                }} >
                    <img src={Pro} alt="" />
                    <div className="price">
                        <h4>Pro</h4>
                        <p>{price ? '$150/yr' : '$15/mo'}</p>
                        <h3 className={price ? 'price-p' : 'hide'}>2 months free</h3>
                    </div>
                </div>
            </div>
            <div className="plan-switch">
                <p>Monthly</p>
                <Switch price={price} setPrice={setPrice} />
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