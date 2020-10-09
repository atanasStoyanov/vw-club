import React from 'react';
import styles from './index.module.css';
import profileIcon from '../../images/profile-icon.png';


const Comment = ({ comment, author }) => {

    return (
        <div className={styles.container}>
            <div className={styles['media-container']}>
                <div className={styles.media}>
                    <div className={styles.inner}>
                        <img src={author.avatar || profileIcon} alt='avatar' />
                    </div>
                </div>
            </div>
            <div className={styles.comment}>
                <h5> {author.username}</h5>
                    <p>{comment}</p>
            </div>
        </div>
    )
}

export default Comment;