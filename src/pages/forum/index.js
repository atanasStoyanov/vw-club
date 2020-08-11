import React from 'react';
import PageLayout from '../../components/page-layout';
import AuthInfoSection from '../../components/auth-info-section';
import Posts from '../../components/posts';
import ComponentErrorBoundery from '../../components/component-erroBoundery';

const ForumPage = () => {

    return (
        <PageLayout>
            <AuthInfoSection
                title='Welcome to VW Passat Club Forum'
                message='This is a forum for fans and owners of cars from the VW Passat B6, B7, CC models.'
                info='Use this forum to share your experience, ask questions, post a solution to a problem or any other topic related to your VW Passat vehicle.'
            />
            <ComponentErrorBoundery>
                <Posts title='Checkout the latest posts in the forum or create a new one' noPostsMsg="There aren't any posts in the forum yet. Be the first one to create!" />
            </ComponentErrorBoundery>
        </PageLayout>
    )
}

export default ForumPage;