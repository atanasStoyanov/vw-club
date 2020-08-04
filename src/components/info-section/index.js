import React, { useContext } from 'react';
import styles from './index.module.css';
import Title from '../title';
import Slogan from '../slogan';
import UserContext from '../../Context';

const InfoSection = () => {
    const context = useContext(UserContext);
    const {username} = context.user 
    
    return (
        <section className={styles.container}>
            <Title title='Welcome to VW Club Forum' />
            <h3>
                {`Hello ${username}, this is a forum for fans and car owners of the VW Group.`}
            </h3>
            <p className={styles.p}>
                Use this forum to share your experience, ask questions, post a solution to a problem or any other topic related to your VW vehicle.
            </p>
            <Slogan/>
        </section>
    )
}

export default InfoSection;