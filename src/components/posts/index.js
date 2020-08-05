import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';
import PostCard from '../post-card';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const promise = await fetch('http://localhost:9999/api/publication');
        const posts = await promise.json();
        setPosts(posts);
    }

    useEffect(() => {
        getPosts()
    }, []);

    const renderPosts = () => {
        return posts.map(post => {
            return (
                <PostCard key={post._id} {...post} />
            )
        })
    }

    return (
        <section className={styles.container}>
            <h1>Forum Posts</h1>
            <LinkButton href='/forum/create-post' title='Create Post' />
            <div className={styles['posts-container']}>
                {renderPosts()}
            </div>

        </section>
    )
}

export default Posts;