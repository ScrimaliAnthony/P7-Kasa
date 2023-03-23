import React, { useEffect, useState } from 'react';

const Host = ({location}) => {

    const [name, setName] = useState();
    const [picture, setPicture] = useState();

    useEffect(() => {
        setName(location?.host.name);
        setPicture(location?.host.picture)
    }, [location?.host.name, location?.host.picture])

    return (
        <div className='host'>
            <p>{name}</p>
            <img src={picture} alt="Avatar de l'utilisateur" />
        </div>
    );
};

export default Host;