import React, { useEffect, useState } from 'react';

const Stars = ({location}) => {

    const [starNumber, setStarNumber] = useState([0,0,0,0,0]);
    const [star, setStar] = useState([]);

    useEffect(() => {
        if(location?.rating !== undefined) {
            setStarNumber(starNumber.fill(1, location?.rating));

            const tempStar = [];
            for(let i = 0; i < starNumber?.length; i++) {
                if(Number(starNumber[i]) === 0) {
                    tempStar.push("/images/StarRed.svg")
                } else {
                    tempStar.push("/images/StarGrey.svg")
                }
            }
            setStar(tempStar);
        }
    }, [starNumber, location])

    return (
        <ul className='stars'>
            {star.map((oneStar, index) => 
                <li key={index}>
                    <img 
                        src={oneStar}
                        alt="Etoiles"
                    />
                </li>
            )}
        </ul>
    );
};

export default Stars;
