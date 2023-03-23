import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
            <p className='error404'>404</p>
            <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default Error;