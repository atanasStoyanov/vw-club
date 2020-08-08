import React, { useState, useEffect, useContext } from 'react';
import styles from './index.module.css';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import getCookie from '../../utils/getCookie';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Container from '../../components/post-details-container';
import PostDetailsInfo from '../../components/post-details-info';
import LinkButton from '../../components/button/link-button';
import SubmitButton from '../../components/button/submit-button';
import Comment from '../../components/comment';

const PostDetailsPage = () => {

    const [post, setPost] = useState(null);
    const [isAuthor, setIsAuthor] = useState(false);
    const [isLiked, setIsLiked] = useState(null);

    const context = useContext(UserContext);
    const params = useParams();
    const history = useHistory();

    const idString = params.postId;
    const id = idString.replace(':', '');

    const likeBtnTitle = isLiked ? 'Already Liked' : 'Like Post';

    const getPost = async () => {

        const response = await fetch(`http://localhost:9999/api/publication/details?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const post = await response.json();

            const postAuthorId = post.author._id;
            const currentUserId = context.user.id;
            const isAuthor = postAuthorId === currentUserId;

            const isLiked = post.likes.includes(currentUserId);

            setPost(post);
            setIsAuthor(isAuthor);
            setIsLiked(isLiked);
        }
    }

    const handleLike = async () => {
        const response = await fetch(`http://localhost:9999/api/publication/like-post?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        });

        if (!response.ok) {
            history.push('/error');
        } else {

            setIsLiked(true);
        }
    }

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:9999/api/publication?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        if (!response.ok) {
            history.push('/error');
        } else {
            history.push('/forum')
        }

    }

    const renderComments = () => {
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

    useEffect(() => {
        getPost();
    }, [])

    if (!post) {
        return (
            <PageLayout>
                <section className={styles['loading-details']}>
                    <div>Loading...</div>
                </section>
            </PageLayout>
        )
    }

    return (

        <PageLayout>
            <Container>
                <Title title={post.title} />
                <PostDetailsInfo post={post} />
                <LinkButton href={`/forum/comment-post/:${post._id}`} title='Add comment' />
                {isAuthor ?
                    (<SubmitButton title='Delete Post' onClick={handleDelete} />) :
                    (<SubmitButton title={likeBtnTitle} onClick={handleLike} disabled={isLiked ? true : false} />)}
            </Container>
            <Container>
                <Title title='Comments' />
                {renderComments()}
            </Container>
        </PageLayout>
    )
}

export default PostDetailsPage;