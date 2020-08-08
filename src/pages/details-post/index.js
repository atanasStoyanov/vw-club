import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../../components/title';
import LinkButton from '../../components/button/link-button';
import Container from '../../components/post-details-container';
import PostDetailsInfo from '../../components/post-details-info';
import Comment from '../../components/comment';

const PostDetailsPage = () => {

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const params = useParams();
    const history = useHistory();

    const getPost = async () => {
        const idString = params.postId;
        const id = idString.replace(':', '');

        const response = await fetch(`http://localhost:9999/api/publication/details?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const post = await response.json();
            setPost(post);
            setComments(post.comments)
            console.log(post);
            
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
            </Container>
            <Container>
                <Title title='Comments' />
                {renderComments()}
            </Container>
        </PageLayout>
    )
}

export default PostDetailsPage;