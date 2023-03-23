import React, { useEffect, useState } from 'react';

const Tag = ({location}) => {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(location?.tags)
    }, [location?.tags])

    return (
        <ul className='tag'>
            {tags?.map((tag, index) => 
                <li key={index}>
                    <div>
                        {tag}
                    </div>
                </li>
            )}
        </ul>
    );
};

export default Tag;