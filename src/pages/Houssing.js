import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import DropDown from '../components/DropDown';
import Host from '../components/Host';
import Stars from '../components/Stars';
import Tag from '../components/Tag';
import Title from '../components/Title';

const Houssing = ({data}) => {

    let {id} = useParams();
    const [location, setLocation] = useState();

    useEffect(() => {
        for(let i = 0; i < data.length; i++) {
            if(id === data[i].id) {
                setLocation(data[i]);
            }
        }
    }, [id, location]);

    return (
        <div className='houssing'>
            <Carrousel location={location} />
            <div className='flex'>
                <div className='info'>
                    <Title location={location} />
                    <Tag location={location} />
                </div>
                <div className='params'>
                    <Stars location={location} />
                    <Host location={location} />
                </div>
            </div>
            <div className='drop'>
                <DropDown usage={4} location={location} />
                <DropDown usage={5} location={location} />
            </div>
        </div>
    );
};

export default Houssing;