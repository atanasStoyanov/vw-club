import React, { useContext } from 'react';
import styles from './index.module.css';
import Title from '../title';
import Slogan from '../slogan';
import UserContext from '../../Context';

const AuthInfoSection = ({ title, message, info }) => {
    const context = useContext(UserContext);

    const { username } = context.user ? context.user : '';

    return (
        <section className={styles.container}>
            <Title title={title} />
            <h3> {context.loggedIn ? `Hello ${username}!` : 'Hello VW Passat fan!'} </h3>
            <h3> {message} </h3>
            <p className={styles.p}> {info} </p>
            <Slogan />
        </section>
    )
}

export default AuthInfoSection;