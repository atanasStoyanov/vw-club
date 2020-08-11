import React from 'react';
import styles from './index.module.css';

const Footer = () => {

    return(
        <footer>
            <div className={styles.footer}>
                <p className={styles['copy-right']}>Copyright © VW Passat Club 2020</p>
            </div>
        </footer>
    )
}

export default Footer;