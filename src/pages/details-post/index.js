import React, { useState, useEffect, useContext, useCallback } from 'react';
import styles from './index.module.css';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import getCookie from '../../utils/getCookie';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Container from '../../components/post-details-container';
import PostDetailsInfo from '../../components/post-details-info';
import SubmitButton from '../../components/button/submit-button';
import LinkButton from '../../components/button/link-button';
import ComponentErrorBoundery from '../../components/component-erroBoundery';
import Comments from '../../components/comments';
import Textarea from '../../components/textarea';
import ErrorMsg from '../../components/error-msg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


const PostDetailsPage = () => {

    const [post, setPost] = useState(null);
    const [isAuthor, setIsAuthor] = useState(false);
    const [isLiked, setIsLiked] = useState(null);
    const [comment, setComment] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [newComment, setNewComment] = useState([]);

    const context = useContext(UserContext);
    const params = useParams();
    const history = useHistory();

    const idString = params.postId;
    const id = idString.replace(':', '');

    const getPost = useCallback(async () => {
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
    }, [context.user.id, history, id])

    useEffect(() => {
        getPost();
    }, [getPost, newComment])

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

    const handleComment = async (e) => {
        e.preventDefault();

        if (comment === '') {
            setErrorMsg('Cannot submit empty comment!');
            return;
        }

        await fetch('http://localhost:9999/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                comment,
                postId: id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        }).then(res => {
            setComment('');
            setNewComment([...newComment, 1])
        }).catch(e => {
            console.log('Error: ', e);
        })
    }


    if (!post) {
        return (
            <PageLayout>
                <Container>
                    <div>Loading...</div>
                </Container>
            </PageLayout>
        )
    }

    return (

        <PageLayout>
            <ComponentErrorBoundery>
                <Container>
                    <Title title={post.title} />
                    <PostDetailsInfo post={post} />
                    <div className={styles.actions}>
                        {isAuthor ?
                            (<SubmitButton title='Delete Post' onClick={handleDelete} icon={faTrashAlt} />) :
                            (<SubmitButton title={'Like'} onClick={handleLike} icon={faThumbsUp} disabled={isLiked ? true : false} />)}
                        {isAuthor ? (<LinkButton href={`/forum/update-post/${id}`} icon={faEdit} title='Update' />) : null}
                    </div>
                </Container>
            </ComponentErrorBoundery>
            <ComponentErrorBoundery>
                <Container>
                    <Title title='Comments' />
                    <div className={styles['form-container']}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faCommentDots} size='6x' />
                        </div>
                        <form className={styles.form} onSubmit={handleComment}>
                            <Textarea
                                value={comment}
                                onChange={(e) => {
                                    setComment(e.target.value);
                                    setErrorMsg('');
                                }}
                                label='Add Comment'
                                id='comment'
                                placeholder='Share your thoughts here...'
                            />
                            {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                            <SubmitButton title='Comment' icon={faComment}/>
                        </form>
                    </div>

                    <Comments post={post} />
                </Container>
            </ComponentErrorBoundery>
        </PageLayout>
    )
}

export default PostDetailsPage;