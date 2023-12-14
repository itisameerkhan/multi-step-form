import { useState } from 'react';
import './Switch.css';

const Switch = () => {

    const currentState = localStorage.getItem('clicked'); 
    const [clicked, setClicked] = useState(currentState); 

    return (
        <div 
            className={"switch"}
            onClick={() => {
                localStorage.setItem('clicked',!clicked);
                setClicked(!clicked);
            }}>
            <div className={`button ${ currentState === 'true' ? 'clicked' : 'not-clicked'}`}></div>
        </div>
    )
}

export default Switch;