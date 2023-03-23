import React from 'react';
import { NavLink } from 'react-router-dom';

const Thumb = ({ data }) => {
    return (
        <li className='thumb'>
            <NavLink to={"/houssing/" + data.id}>
                <div className='thumbContainer'>
                    <img src={data.cover} alt={"Image " + data.title} />
                    <p>{data.title}</p>
                </div>
            </NavLink>
        </li>
    );
};

export default Thumb;