import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img src="/images/Vector_K_blanc.svg" alt="Lettre K du logo Kasa" className='footer__logo__letter__K' />
                <img src="/images/Group_A_blanc.svg" alt="Lettre A du logo Kasa en forme de maison" className='footer__logo__letter__AM' />
                <img src="/images/Vector_S_blanc.svg" alt="Lettre S du logo Kasa" className='footer__logo__letter__S' />
                <img src="/images/Vector_A_blanc.svg" alt="Lettre A du logo Kasa" className='footer__logo__letter__A' />
            </div>
            <p>&copy Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;