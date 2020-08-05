import React from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';

const PostCard = ({ title, image, description, carModel, author, _id }) => {

    return (
        <div className={styles.card}>
            <div className={styles['card-image']}>
                <img src={image} style={{ width: '400px', height: 'auto' }} />
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <h4 className={styles.model}>{carModel}</h4>
                <p>
                    <span><small>Author:</small> {author.username}</span>
                </p>
                <LinkButton href={`/forum/post/:${_id}`} title='Details' />
            </div>
        </div>
    )
}

export default PostCard;