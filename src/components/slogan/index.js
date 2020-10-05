import React from 'react';
import styles from './index.module.css';
import logo from '../../images/vw-logo.png';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles['slogan-element']}>
                <img src={logo} className={styles.logo} alt="vw-logo" />
            </div>
            <div className={styles['slogan-element']}>
                <h3 >Volkswagen. Das Auto.</h3>
            </div>
        </div>

    )
}

export default Slogan;