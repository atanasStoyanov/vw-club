import React, { useState, useEffect, useCallback } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import { useParams, useHistory } from 'react-router-dom';
import Posts from '../../components/posts';
import ComponentErrorBoundery from '../../components/component-erroBoundery';
import UserInfo from '../../components/user-profile-info';
import Container from '../../components/post-details-container';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const params = useParams();
    const history = useHistory();

    const id = params.userId;

    const getData = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const user = await response.json();
            setUser(user);
        }
    }, [id, history])

    useEffect(() => {
        getData()
    }, [getData])

    if (!user) {
        return (
            <PageLayout>
                <section className={styles.details}>
                    <Title title='My profile' />
                    <div> Loading...</div>
                </section>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <ComponentErrorBoundery>
                <Container>
                    <UserInfo user={user} />
                </Container>
            </ComponentErrorBoundery>
            <ComponentErrorBoundery>
                <div className={styles.posts}>
                    <Posts userId={user._id} title='My Posts' noPostsMsg="You don't have any posts yet" />
                </div>
            </ComponentErrorBoundery>
        </PageLayout>
    )
}

export default ProfilePage;