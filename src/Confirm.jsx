import './Confirm.css';
import ThankYouIcon from '../images/icon-thank-you.svg';

const Confirm = () => {
    return (
        <div className="confirm">
            <img src={ThankYouIcon} alt="" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Confirm;