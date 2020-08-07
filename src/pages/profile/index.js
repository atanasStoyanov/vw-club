import React, { useState, useContext, useEffect, useCallback } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import profileIcon from '../../images/profile-icon.png'
import UserContext from '../../Context';
import { useParams, useHistory } from 'react-router-dom';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const params = useParams();
    const history = useHistory();

    const getData = useCallback(async () => {
        const id = params.userId;
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const user = await response.json();
            setUser(user);
            setPosts(user.posts && user.posts.length);
        }
    }, [params.userId, history])

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
                    <img src={profileIcon} alt='car' className={styles.image} />
                </div>
                <div className={styles.info}>
                    <h3>Username: {user.username}</h3>
                    <h4 className={styles.model}><small>Car model:</small> {user.carModel || 'VW Passat'}</h4>
                </div>
            </section>
        </PageLayout>
    )
}

export default ProfilePage;