import React from 'react';
import styles from './index.module.css';
import PostValues from '../post-values';
import icon from '../../images/passat-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';


const PostDetailsInfo = ({ post }) => {

    return (
        <div className={styles['details-container']}>
            <div className={styles.media}>
                <div className={styles.inner}>
                    <img src={post.image || icon} alt='car' />
                </div>
            </div>

            <div className={styles.info}>
                <p className={styles.model}><span className={styles.icon}><FontAwesomeIcon icon={faCar} size='1x' /></span> <small>Car model:</small> {post.carModel}</p>
                <h3>Post Description</h3>
                <p>{post.description}</p>
                <PostValues comments={post.comments} likes={post.likes} author={post.author} />
            </div>
        </div>
    )
}

export default PostDetailsInfo;