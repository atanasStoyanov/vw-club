import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/page-layout';
import AuthInfoSection from '../../components/auth-info-section';
import Posts from '../../components/posts';

const ForumPage = () => {

    return (
        <PageLayout>
            <AuthInfoSection
                title='Welcome to VW Passat Club Forum'
                message='This is a forum for fans and car owners of the VW Group.'
                info='Use this forum to share your experience, ask questions, post a solution to a problem or any other topic related to your VW vehicle.'
            />
            <Posts title='Checkout the latest posts in the forum or create a new one' noPostsMsg="There aren't any posts in the forum yet. Be the first one to create!" />
        </PageLayout>
    )
}

export default ForumPage;