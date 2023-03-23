import React, { useEffect, useState } from 'react';

const Title = ({location}) => {

    const [title, setTitle] = useState("");
    const [localisation, setLocalisation] = useState("");

    useEffect(() => {
        setTitle(location?.title);
        setLocalisation(location?.location);
    }, [location?.title, location?.location])

    return (
        <div className='title'>
            <h1>{title}</h1>
            <p>{localisation}</p>
        </div>
    );
};

export default Title;