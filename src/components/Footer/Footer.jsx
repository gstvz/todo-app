import './Footer.css';
import Button from '../Button/Button';

function Footer({ tasks }) {
    return (
            <div className="footer-wrapper">
                <span>You have 3 pending tasks</span>
                <Button className="clear" content="Clear All" />
            </div>        
    )
}

export default Footer;