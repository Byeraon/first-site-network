import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css';

const DialogItem = (props) => {
    return <NavLink to={/dialogs/ + props.id} className={s.dialog}> 
    <h3>{props.name}</h3></NavLink>
}


export default DialogItem;