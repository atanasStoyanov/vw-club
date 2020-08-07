import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../../components/title';
import LinkButton from '../../components/button/link-button';

const PostDetailsPage = () => {

    const [post, setPost] = useState(null);
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
        }
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
            <section className={styles.details}>
                <Title title={post.title} />
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
                <LinkButton href={`/forum/comment-post/:${post._id}`} title='Add comment'/>
            </section>
        </PageLayout>
    )
}

export default PostDetailsPage;