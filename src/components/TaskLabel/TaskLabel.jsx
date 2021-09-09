import { useState } from 'react';
import './TaskLabel.css';
import Button from '../Button/Button';

function TaskLabel({ handleDelete, children }) {

    const [isHovering, setIsHovering] = useState(false);

    const handleHovering = () => {
        setIsHovering(true);
    }

    const handleNotHovering = () => {
        setIsHovering(false);
    }   

    return (
        <li
            onMouseEnter={handleHovering}
            onMouseLeave={handleNotHovering}
        >{children} {isHovering && <Button className="delete" content="trash" onClick={handleDelete} />}</li>
    )
}

export default TaskLabel;