import React, { useState, useEffect, useCallback } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import profileIcon from '../../images/profile-icon.png';
import { useParams, useHistory } from 'react-router-dom';
import LinkButton from '../../components/button/link-button';
import Posts from '../../components/posts';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
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
            setPosts(user.posts && user.posts.length);
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
            <section className={styles.details}>
                <Title title='My profile' />
                <div>
                    <img src={user.avatar || profileIcon} alt='car' className={styles.image} />
                </div>
                <div className={styles.info}>
                    <h3>Username: {user.username}</h3>
                    <h4 className={styles.model}><small>Car model:</small> {user.carModel || 'No info..'}</h4>
                    <h4 className={styles.model}><small>Posts:</small> {posts}</h4>
                </div>
                <LinkButton href={`/update-profile/${id}`} title='Update Profile'/>
            </section>

            <Posts userId={user._id} title='My Posts' noPostsMsg="You don't have any posts yet"/>
        </PageLayout>
    )
}

export default ProfilePage;