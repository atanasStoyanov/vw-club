import React from 'react';
import SmallParagraph from '../small-paragraph';
import styles from './index.module.css';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const PostValues = ({ comments, likes, author }) => {
    return (
        <ul className={styles['values-list']}>
            <li><SmallParagraph label='Comments' value={comments.length} icon={faCommentDots} /></li>
            <li><SmallParagraph label='Likes' value={likes.length} icon={faThumbsUp}/></li>
            <li><SmallParagraph label='Author' value={author.username} icon={faUser} /></li>
        </ul>
    )
}

export default PostValues;