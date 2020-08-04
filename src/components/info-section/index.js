import React from 'react';
import styles from './index.module.css';
import Title from '../title';
import Slogan from '../slogan';

const InfoSection = () => {

    return (
        <section className={styles.container}>
            <Title title='Welcome to VW Club Forum' />
            <h3>
                Hello, this is a forum for fans and car owners of the VW Group.
            </h3>
            <p className={styles.p}>
                Use this forum to share your experience, ask questions, post a solution to a problem or any other topic related to your VW vehicle.
            </p>
            <Slogan/>
        </section>
    )
}

export default InfoSection;