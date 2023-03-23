import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/">
                <div className='logo'>
                    <img 
                        src="/images/Vector_K.svg"
                        alt="Lettre K du logo Kasa" 
                        className='logo__letterK' />
                    <img 
                        src="/images/Group_A.svg" 
                        alt="Lettre A du logo Kasa en forme de maison" 
                        className='logo__letterAM' />
                    <img 
                        src="/images/Vector_S.svg" 
                        alt="Lettre S du logo Kasa" 
                        className='logo__letterS' />
                    <img 
                        src="/images/Vector_A.svg" 
                        alt="Lettre A du logo Kasa" 
                        className='logo__letterA' />
                </div>
            </NavLink>
            <ul className='nav'>
                <NavLink to="/" className={(
                    (nav) => (nav.isActive ? 
                        "nav-active" : 
                        "nav-unactive")
                    )}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(
                    (nav) => (nav.isActive ? 
                        "nav-active" : 
                        "nav-unactive"))}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;