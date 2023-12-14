import { Checkbox } from '@mui/material';
import './Addons.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Addons = () => {
    const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('checkbox')) || [false, false, false]);
    
    const handleToggle = (index) => {
        const list = [...checked];
        list[index] = !list[index];
        setChecked(list);
        localStorage.removeItem('checkbox');
        localStorage.setItem('checkbox', JSON.stringify(list));
    }

    return (
        <div className="add-ons">
            <div className="addons-header">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
            </div>
            <div className="addons-main">
                <div   
                    className={`addons-checklist ${checked[0] ? 'addons-checked' : 'none'}`}
                    onClick={() => handleToggle(0)}>
                    <div className="add-div">
                        <Checkbox checked={checked[0]} />
                        <div className="one-description">
                            <h2>Online service</h2>
                            <p>Access to multiplayer game</p>
                        </div>
                    </div>
                    <h4>+$1/mo</h4>
                </div>
                <div   
                    className={`addons-checklist ${checked[1] ? 'addons-checked' : 'none'}`}
                    onClick={() => handleToggle(1)}>
                    <div className="add-div">
                        <Checkbox checked={checked[1]} />
                        <div className="one-description">
                            <h2>Larger storage</h2>
                            <p>Extra 1TB of cloud service</p>
                        </div>
                    </div>
                    <h4>+$2/mo</h4>
                </div>
                <div   
                    className={`addons-checklist ${checked[2] ? 'addons-checked' : 'none'}`}
                    onClick={() => handleToggle(2)}>
                    <div className="add-div">
                        <Checkbox checked={checked[2]} />
                        <div className="one-description">
                            <h2>Customizable profile</h2>
                            <p>Custom theme on your profile</p>
                        </div>
                    </div>
                    <h4>+$2/mo</h4>
                </div>
            </div>
            <div className="addons-footer">
                <Link to={'/select-plan'} className='go-back'>Go Back</Link>
                <Link to={'/summary'}>
                    <button className='next-step-btn-1'>Next step</button>
                </Link>
            </div>
        </div>
    )
}
export default Addons;