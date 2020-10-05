import React from 'react';
import styles from './index.module.css';
import Header from '../header';
import Footer from '../footer';

const PageLayout = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.media}></div>
            <div className={styles['site-content']}>
                <div className={styles['inner-container'] + ' ' + styles['site-wrapper']}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout;