import React from 'react';
import styles from './index.module.css';

const PostDetailsInfo = ({ post }) => {

    return (
        <div>
            <div>
                <img src={post.image} alt='car' className={styles.image} />
            </div>
            <div className={styles.info}>
                <h4 className={styles.model}><small>Car model:</small> {post.carModel}</h4>
                <h3>Post Description</h3>
                <p>{post.description}</p>
                <p className={styles.author}>
                    <span><small>Author:</small> {post.author.username} </span>
                </p>
            </div>
        </div>
    )
}

export default PostDetailsInfo;