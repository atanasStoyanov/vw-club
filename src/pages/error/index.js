import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import errorImg from '../../images/error-sign.svg';

const ErrorPage = () => {

    return (
        <PageLayout>
            <div className={styles.container}>
                <p>Something went wrong...</p>
                <img src={errorImg} className={styles['error-img']} alt='error' />
            </div>
        </PageLayout>
    )
}

export default ErrorPage;