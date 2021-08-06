import { NavLink } from 'react-router-dom';
import f from './nav.module.css';


const Nav = () => {
    return (
        <nav className={f.nav}>
            <NavLink to="/profile"><h2>PROFILE</h2></NavLink>
            <NavLink to="/dialogs"><h2>MESSAGES</h2></NavLink>
            <NavLink to="/news"><h2>NEWS</h2></NavLink>
            <NavLink to="/music"><h2>MUSIC</h2></NavLink>
            <NavLink to="/settings"><h2>SETTINGS</h2></NavLink>
        </nav>
    );
};


export default Nav;