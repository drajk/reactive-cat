import React, { useState, useEffect } from 'react';
import { getPets } from '../utils/api';
import styles from './Pets.module.css';

const Pets = ({ gender, type }) => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        getPets(gender, type).then(data => setNames(data));
    }, [gender, type]);

    return (
        <>
            <div className={styles.title}>{gender}</div>
            {names.map(name => (
                <div key={name} className={styles.name}>
                    {name}
                </div>
            ))}
        </>
    );
};

export default Pets;
