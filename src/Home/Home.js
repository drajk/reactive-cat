import React from 'react';
import Pets from '../Pets/Pets';
import styles from './Home.module.css';

const Home = () => (
    <div className={styles.container}>
        <p className={styles.title}>List of all Cats: </p>
        <Pets type="Cat" gender="Male" />
        <Pets type="Cat" gender="Female" />
    </div>
);

export default Home;
