import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import errorImg from '../../images/error-sign.svg';
import Title from '../../components/title';

const ErrorPage = () => {

    return (
        <PageLayout>
            <div className={styles.container}>
                <div className={styles.section}>
                    <Title title='Something went wrong...' />
                    <img src={errorImg} className={styles['error-img']} />
                </div>
            </div>
        </PageLayout>
    )
}

export default ErrorPage;