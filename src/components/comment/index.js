import React from 'react';
import styles from './index.module.css';
import profileIcon from '../../images/profile-icon.png';


const Comment = ({ comment, author }) => {

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <img src={author.avatar || profileIcon } style={{ width: '60px', height: '50px' }} alt='avatar' />
            </div>
            <div className={styles.element}>
                <h3 > {author.username}</h3>
                <div className={styles.comment}>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;