import React, { Component } from 'react';
import styles from './index.module.css';
import SubmitButton from '../button/submit-button';

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={styles.container}>
                <h1>Forum Posts</h1>
                <div className={styles['posts-container']}>
                    <SubmitButton title='Create Post' />
                </div>
            </section>
        )
    }
}

export default Posts;