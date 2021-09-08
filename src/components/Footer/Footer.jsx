import './Footer.css';
import Button from '../Button/Button';

function Footer({ tasks }) {
    return (
            <div className="footer-wrapper">
                {   
                    tasks.length > 1 ? <span>You have {tasks.length} pending tasks</span> :
                    tasks.length == 0 ? <span>You have no pending tasks</span> :
                    <span>You have {tasks.length} pending task</span>
                }
                <Button className="clear" content="Clear All" />
            </div>        
    )
}

export default Footer;