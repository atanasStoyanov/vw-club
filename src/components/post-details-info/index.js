import React from 'react';
import styles from './index.module.css';
import PostValues from '../post-values';
import icon from '../../images/passat-icon.svg'

const PostDetailsInfo = ({ post }) => {

    return (
        <div>
            <div>
                <img src={post.image || icon } alt='car' className={styles.image} />
            </div>
            <div className={styles.info}>
                <h4 className={styles.model}><small>Car model:</small> {post.carModel}</h4>
                <h3>Post Description</h3>
                <p>{post.description}</p>
                <PostValues comments={post.comments} likes={post.likes} author={post.author}/>
            </div>
        </div>
    )
}

export default PostDetailsInfo;