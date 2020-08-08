import React from 'react';
import styles from './index.module.css';
import SmallParagraph from '../small-paragraph';

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
                <SmallParagraph label='Comments' value={post.comments.length}/>
                <SmallParagraph label='Likes' value={post.likes.length}/>
                <SmallParagraph label='Author' value={post.author.username}/>
            </div>
        </div>
    )
}

export default PostDetailsInfo;