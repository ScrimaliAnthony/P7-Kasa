import React, { useEffect, useState } from 'react';
import {} from 'react-router-dom';

const Carrousel = ({location}) => {

    const [picture, setPicture] = useState([]);
    const [pictureNumber, setPictureNumber] = useState(0);
    const [pictureTab, setPictureTab] = useState([]);

    useEffect(() => {
        setPicture(location?.pictures?.[pictureNumber]);
        setPictureTab(location?.pictures);
    }, [location, pictureNumber])

    return (
        <div className='carrousel'>
            {pictureTab?.length > 1 ? (
                    <div className='carrousel__arrow'>
                        <div className='carrousel__arrow__left'
                            onClick={() => {
                                setPictureNumber(pictureNumber - 1);
                                if(pictureNumber <= 0) {
                                    setPictureNumber(pictureTab?.length - 1);
                                }
                            }}
                        >
                            <img
                                src="/images/VectorCarrouselBack.svg"
                                alt="Aller vers l'arrière"
                            />
                        </div>
                        <div className='carrousel__arrow__right'
                            onClick={() => {
                                setPictureNumber(pictureNumber + 1);
                                if(pictureNumber >= (pictureTab?.length - 1)) {
                                    setPictureNumber(0);
                                }
                            }} 
                        >
                            <img 
                                src="/images/VectorCarrouselForward.svg"
                                alt="Aller vers l'avant"
                            />
                        </div>
                    </div> 
                ) : (
                    ""
            )}
            <p className='carrousel__page'>
                {(pictureNumber + 1) + "/" + pictureTab?.length}
            </p>
            <img className='carrousel__picture'
                src={picture}
                alt="Location"
            />
        </div>
    );
};

export default Carrousel;