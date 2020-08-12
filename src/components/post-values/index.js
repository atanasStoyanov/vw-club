import React from 'react';
import SmallParagraph from '../small-paragraph';

const PostValues = ({ comments, likes, author }) => {
    return (
        <div>
            <SmallParagraph label='Comments' value={comments.length} />
            <SmallParagraph label='Likes' value={likes.length} />
            <SmallParagraph label='Author' value={author.username} />
        </div>
    )
}

export default PostValues;