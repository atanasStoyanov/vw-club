import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';
import PostCard from '../post-card';
import Title from '../title';
import ContainerSection from '../container-section';
import Search from '../../components/search';

const Posts = ({ userId, title, noPostsMsg }) => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchedPosts, setSearchedPosts] = useState([])

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
    }, [getPosts])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
        setSearchedPosts(searchedPosts)
    }

    const renderAllPosts = () => {

        if (posts.length < 1) {
            return (
                <h3>{noPostsMsg}</h3>
            )
        }

        return posts.map(post => {
            return (
                <PostCard key={post._id} {...post} />
            );
        });
    }

    const renderSearchedPosts = () => {
        if (searchedPosts.length < 1) {
            return (
                <h3>There are no posts with the searched criteria</h3>
            )
        }

        return searchedPosts.map(post => {
            return (
                <PostCard key={post._id} {...post} />
            );
        });
    }

    return (
        <ContainerSection>
            <Title title={title} />
            <div className={styles.actions}>
                <LinkButton href='/forum/create-post' title='Create Post' />
                <Search value={search} onChange={handleSearch} />
            </div>
            <div className={styles['posts-container']}>
                {search ? renderSearchedPosts() : renderAllPosts()}
            </div>
        </ContainerSection>

    )
}

export default Posts;