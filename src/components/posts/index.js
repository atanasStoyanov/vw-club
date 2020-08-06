import React, { useState, useEffect } from 'react';
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
        getPosts();
    }, [])

    const renderPosts = () => {
        
        if (posts.length < 1) {
            return(
                <h3>There aren't any posts in the forum yet. Be the first one to create!</h3>
            )
        }

        return posts.map(post => {
            return (
                <PostCard key={post._id} {...post} />
            )
        })
    }

    return (
        <section className={styles.container}>
            <h1>Checkout the latest posts in the forum or create a new one</h1>
            <LinkButton href='/forum/create-post' title='Create Post' />
            <div className={styles['posts-container']}>
                {renderPosts()}
            </div>

        </section>
    )
}

export default Posts;