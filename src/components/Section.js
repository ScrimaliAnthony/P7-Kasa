import React from 'react';

const Section = ({photo}) => {

    return (
        <div className={(
            photo === false ? (
                "section section--about"
            ) : (
                'section section--home'
            ))}>
            {(
                photo === false ? (
                    ""
                ) : (
                <h1>Chez vous,<br /> partout et ailleurs</h1>
                )
            )}
        </div>
    );
};

export default Section;