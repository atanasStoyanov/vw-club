import React from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';
import SmallParagraph from '../small-paragraph';
import icon from '../../images/passat-icon.svg';

const PostCard = ({ title, image, carModel, comments, likes, author, _id }) => {

    return (
        <div className={styles.card}>
            <div className={styles['card-image']}>
                <img src={image || icon} style={{ width: '400px', height: '300px' }} alt='car' />
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <h4 className={styles.model}>{carModel}</h4>
                <SmallParagraph label='Comments' value={comments.length}/>
                <SmallParagraph label='Likes' value={likes.length}/>
                <SmallParagraph label='Author' value={author.username}/>
                <LinkButton href={`/forum/post/:${_id}`} title='Details' />
            </div>
        </div>
    )
}

export default PostCard;