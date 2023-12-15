import { Link } from 'react-router-dom';
import './Summary.css';
import '../images/icon-thank-you.svg';

const Summary = () => {

    const plan = JSON.parse(localStorage.getItem('plan'))
    const addons = JSON.parse(localStorage.getItem('addons'));
    const price = localStorage.getItem('price');
    let total = plan[2];
    addons.map(data => { total += data[2]; })

    return (
        <div className="summary">
            <div className="summary-header">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before contirming.</p>
            </div>
            <div className="summary-main">
                <div className="summary-main-inner">
                    <h2>{plan[0]}</h2>
                    <Link to={'/select-plan'}>Change</Link>
                </div>
                <h4>{plan[1]}</h4>
            </div>
            <div className="summary-main-down">
                {addons.map((data) => (
                    <div className="summary-addon" key={data[0]}>
                        <p className='summary-addon-p1'>{data[0]}</p>
                        <p className='summary-addon-p2'>{data[1]}</p>
                    </div>
                ))}
            </div>
            <div className="summary-result">
                <h3 className='result'>Total {price === 'true' ? '(per month)' : '(per year)'}</h3>
                <h3 className='total'>${total}{price === 'true' ? '/yr' : '/mo'}</h3>
            </div>
            <div className="summary-footer">
                <Link to={'/add-ons'} className='go-back'>Go Back</Link>
                <Link to={'/confirm'}>
                    <button className='next-step-btn-1'>Confirm</button>
                </Link>
            </div>
        </div>
    )
}

export default Summary;