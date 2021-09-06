import { useState } from 'react';
import './TaskLabel.css';
import Button from '../Button/Button';

function TaskLabel() {

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
        >Create a design on Figma {isHovering && <DeleteButton />}</li>
    )
}

export default TaskLabel;