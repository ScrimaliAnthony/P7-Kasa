import React from 'react';
import Thumb from './Thumb';

const Gallery = ({data}) => {
    return (
        <div >
            <ul className='gallery'>
                {data.map((data, index) => (
                    <Thumb key={index} data={data} />
                ))}
            </ul>
        </div>
    );
};

export default Gallery;