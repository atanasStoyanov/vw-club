import React from 'react';
import SmallParagraph from '../small-paragraph';
import styles from './index.module.css';

const PostValues = ({ comments, likes, author }) => {
    return (
        <ul className={styles['values-list']}>
            <li><SmallParagraph label='Comments' value={comments.length} /></li>
            <li><SmallParagraph label='Likes' value={likes.length} /></li>
            <li><SmallParagraph label='Author' value={author.username} /></li>
        </ul>
    )
}

export default PostValues;