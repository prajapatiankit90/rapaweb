import { Button } from "react-bootstrap";

const IButton  = ({ btnName,classes, click, color}) => {
    return (
        <Button className={classes} onClick={click} >{btnName}</Button>
    );
};

export default IButton;