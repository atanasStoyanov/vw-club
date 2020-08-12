import React, { useState } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/button/submit-button';
import ErrorMsg from '../../components/error-msg';
import getCookie from '../../utils/getCookie';
import { useHistory, useParams } from 'react-router-dom';

const CommentPostPage = () => {
    const [comment, setComment] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const history = useHistory();
    const params = useParams();

    const idString = params.postId;
    const id = idString.replace(':', '');

    const handleSubmit = async (e) => {
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
            history.push(`/forum/post/:${id}`);
        }).catch(e => {
            console.log('Error: ', e);
        })
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Textarea
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                            setErrorMsg('');
                        }}
                        label='Add Comment'
                        id='comment'
                        placeholder='Add comment here...'
                    />
                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    <SubmitButton title='Comment' />
                </form>
            </div>
        </PageLayout>
    )
}

export default CommentPostPage;