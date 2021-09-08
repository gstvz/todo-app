import { useState } from 'react';
import './TaskLabel.css';
import Button from '../Button/Button';

function TaskLabel({ children }) {

    const [isHovering, setIsHovering] = useState(false);

    const handleHovering = () => {
        setIsHovering(true);
    }

    const handleNotHovering = () => {
        setIsHovering(false);
    }

    const DeleteButton = () => {
        return (
            <Button className="delete" content="trash" />
        )
    }

    return (
        <li
            onMouseEnter={handleHovering}
            onMouseLeave={handleNotHovering}
        >{children} {isHovering && <DeleteButton />}</li>
    )
}

export default TaskLabel;