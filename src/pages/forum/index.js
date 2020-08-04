import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import InfoSection from '../../components/info-section';
import Posts from '../../components/posts';

const ForumPage = () => {
    return (
        <PageLayout>
            <InfoSection />
            <Posts/>
        </PageLayout>
    )
}

export default ForumPage;