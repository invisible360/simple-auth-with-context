import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../context/UserContecxt';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {
                    user?.uid ?
                        <>
                            <button onClick={logOut}><Link to="/">Log Out</Link></button>
                            <span className='text-white mx-3'>{user?.email}</span>
                        </>
                        :
                        <>
                            <Link to="/login">Log in</Link>
                            <Link to="/signup">Register</Link>
                        </>
                }

            </div>
        </nav>
    );
};

export default Header;