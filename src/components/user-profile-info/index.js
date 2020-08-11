import React from 'react';
import styles from './index.module.css';
import Title from '../../components/title';
import profileIcon from '../../images/profile-icon.png';
import LinkButton from '../../components/button/link-button';
import PageLayout from '../../components/page-layout';



const UserInfo = ({ user }) => {

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
        <section className={styles.details}>
            <Title title='My profile' />
            <div>
                <img src={user.avatar || profileIcon} alt='car' className={styles.image} />
            </div>
            <div className={styles.info}>
                <h3>Username: {user.username}</h3>
                <h4 className={styles.model}><small>Car model:</small> {user.carModel || 'No info..'}</h4>
                <h4 className={styles.model}><small>Posts:</small> {user.posts.length}</h4>
            </div>
            <LinkButton href={`/update-profile/${user._id}`} title='Update Profile' />
        </section>
    )
}

export default UserInfo;