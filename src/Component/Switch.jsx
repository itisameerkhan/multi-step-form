import { useState } from 'react';
import './Switch.css';

const Switch = ({price, setPrice}) => {

    return (
        <div 
            className={"switch"}
            onClick={() => {
                localStorage.setItem('clicked',!price);
                setPrice(!price);
            }}>
            <div className={`button ${ price === true ? 'clicked' : 'not-clicked'}`}></div>
        </div>
    )
}

export default Switch;