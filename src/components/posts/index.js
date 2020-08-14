import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';
import PostCard from '../post-card';
import Title from '../title';
import ContainerSection from '../container-section';


const Posts = ({ userId, title, noPostsMsg }) => {

    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        const promise = await fetch('http://localhost:9999/api/publication');
        const posts = await promise.json();

        if (userId) {
            const currentUserPosts = posts.filter(post => post.author._id === userId);
            setPosts(currentUserPosts);
        } else {
            setPosts(posts);
        }

    }, [userId])

    useEffect(() => {
        getPosts();
    }, [])

    const renderPosts = () => {

        if (posts.length < 1) {
            return (
                <h3>{noPostsMsg}</h3>
            )
        }

        return posts.map(post => {
            return (
                <PostCard key={post._id} {...post} />
            )
        })
    }

    return (
        <ContainerSection>
            <Title title={title} />
            <LinkButton href='/forum/create-post' title='Create Post' />
            <div className={styles['posts-container']}>
                {renderPosts()}
            </div>
        </ContainerSection>

    )
}

export default Posts;