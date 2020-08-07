import React, { useState } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/button/submit-button';

const CommentPostPage = () => {
    const [comment, setComment] = useState('');

    const handleSubmit = async () => {
        //TODO..
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        label='Add Comment'
                        id='comment'
                        placeholder='Add comment here...'
                    />
                    <SubmitButton title='Comment' />
                </form>
            </div>
        </PageLayout>
    )
}

export default CommentPostPage;