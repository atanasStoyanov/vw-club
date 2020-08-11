import React from 'react';
import Comment from '../comment';

const Comments = ({post}) => {

    if (post.comments.length < 1) {
        return (
            <h3>No comments yet!</h3>
        )
    }

    return (
        post.comments.map(comment => {
            return (
                <Comment key={comment._id} {...comment} />
            )
        })
    )
}

export default Comments