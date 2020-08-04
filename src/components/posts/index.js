import React, { Component } from 'react';
import styles from './index.module.css';
import LinkButton from '../button/link-button';


class Posts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={styles.container}>
                <h1>Forum Posts</h1>
                <div className={styles['posts-container']}>
                    <LinkButton href='/forum/create-post'/>
                </div>
            </section>
        )
    }
}

export default Posts;