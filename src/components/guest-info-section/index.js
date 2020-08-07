import React, { useContext } from 'react';
import styles from './index.module.css';
import Title from '../title';
import Slogan from '../slogan';
import UserContext from '../../Context';

const GuestInfoSection = ({ title, message, info }) => {

    return (
        <section className={styles.container}>
            <Title title={title} />
            <h3> {`Hello VW Passat fan!`} </h3>
            <h3> {message} </h3>
            <p className={styles.p}> {info} </p>
            <Slogan />
        </section>
    )
}

export default GuestInfoSection;