import React from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';
import PostValues from '../post-values';
import icon from '../../images/passat-icon.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const PostCard = ({ title, image, carModel, comments, likes, author, _id }) => {

    return (
        <div className={styles.card}>
            <div className={styles['card-media']}>
                <div className={styles.inner}>
                    <img src={image || icon} alt='car' />
                </div>
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p className={styles.model}>{carModel}</p>
                <div className={styles.values}>
                    <PostValues comments={comments} likes={likes} author={author} />
                </div>
                <LinkButton href={`/forum/post/:${_id}`} title='Details' icon={faBars} />
            </div>
        </div>
    )
}

export default PostCard;