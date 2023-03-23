import React from 'react';
import Section from '../components/Section';
import DropDown from '../components/DropDown';


const About = () => {
    
    const photo = false;

    return (
        <div>
            <Section photo={photo} />
            <DropDown usage={0} />
            <DropDown usage={1} />
            <DropDown usage={2} />
            <DropDown usage={3} />
        </div>
    );
};

export default About;