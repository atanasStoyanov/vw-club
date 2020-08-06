import React, { useContext } from 'react';
import styles from './index.module.css';
import Title from '../title';
import Slogan from '../slogan';
import UserContext from '../../Context';

const InfoSection = ({ title, message, info }) => {
    const context = useContext(UserContext);
    const { username } = context.user

    return (
        <section className={styles.container}>
            <Title title={title} />
            <h3> {`Hello ${username}!`} </h3>
            <h3> {message} </h3>
            <p className={styles.p}> {info} </p>
            <Slogan />
        </section>
    )
}

export default InfoSection;