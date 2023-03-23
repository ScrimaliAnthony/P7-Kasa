import React from 'react';
import Gallery from '../components/Gallery';
import Section from '../components/Section';

const Home = ({data}) => {

    const photo = true;

    return (
        <div className='home'>
            <Section photo={photo} />
            <Gallery data={data}/>
        </div>
    );
};

export default Home;