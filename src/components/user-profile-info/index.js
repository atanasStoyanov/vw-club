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
            <div className={styles['media-container']}>
                <div className={styles.media}>
                    <div className={styles.inner}>
                        <img src={user.avatar || profileIcon} alt='car' className={styles.image} />
                    </div>
                </div>
            </div>

            <div className={styles.info}>
                <h4>Username: {user.username}</h4>
                <p className={styles.meta}><small>Car model:</small> {user.carModel || 'No info..'}</p>
                <p className={styles.meta}><small>Posts:</small> {user.posts.length}</p>
                <div className={styles['button-container']}>
                    <LinkButton href={`/update-profile/${user._id}`} title='Update Profile' />
                </div>
            </div>
        </section>
    )
}

export default UserInfo;