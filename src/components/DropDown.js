import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DropDown = ({usage, location}) => {
    
    const [open, setOpen] = useState(false);
    const [dataAbout, setDataAbout] = useState({title: "", content: "", list: false, about: false});

    useEffect(() => {
        if(!dataAbout.title && !dataAbout.content && usage <= 3) {
            axios
                .get('about.json')
                .then(res => setDataAbout({title: res.data[usage].title, content: res.data[usage].content, about: true}))
                .catch(err => console.log(err))
        } else if(usage === 4) {
            setDataAbout({title: "Description", content: location?.description});
        } else if(usage === 5) {
            setDataAbout({title: "Equipement", content: location?.equipments, list: true});
        }
    }, [usage, location])

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={(
                dataAbout.about === true ? (
                    'dropdown__about'
                ) : (
                    'dropdown'
                )
            )}>
            <button onClick={toggle}>{dataAbout.title}
                <img 
                    src="/images/VectorDropDown.svg" 
                    alt="Fleche qui indique si le collapse est ouvert ou pas"
                    className={open ? "open" : ""}
                />
            </button>
            {open && (
                dataAbout.list === true ? (
                    <ul>
                        {dataAbout.content.map((equip, index) => (
                            <li key={index}>{equip}</li>
                        ))}
                    </ul>
                ) : (
                <p>{dataAbout?.content}</p>
                )
            )}
        </div>
    );
};

export default DropDown;