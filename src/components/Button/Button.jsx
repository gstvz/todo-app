import './Button.css';
import addIcon from '../../assets/addIcon.svg';
import trashIcon from '../../assets/trashIcon.svg';

function Button(props) {

    const content = 
        props.content === "add" ? <img src={addIcon} /> : 
        props.content === "trash" ? <img src={trashIcon} /> :
        props.content;
    
    return (
        <button 
            className={props.className}            
        >
            {content}
        </button>
    )
}

export default Button
