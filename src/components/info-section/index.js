import React from 'react';
import styles from './index.module.css';
import Title from '../title';
import Slogan from '../slogan';

const InfoSection = ({ title, message, info }) => {

    return (
        <section className={styles.container}>
            <Title title={title} />
            <h3> {message} </h3>
            <p className={styles.p}> {info} </p>
            <div className={styles.slogan}>
                <Slogan />
            </div>
        </section>
    )
}

export default InfoSection;