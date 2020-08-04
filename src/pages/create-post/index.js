import React, { useState } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import { useHistory } from 'react-router-dom';
import SubmitButton from '../../components/button/submit-button'

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [model, setModel] = useState('');
    const [image, setImage] = useState('');

    const history = useHistory();

    return (
        <PageLayout>
            <div className={styles.container}> 
                <form className={styles.form}>
                    <Title title='Create Post' />
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label='Title'
                        id='title'
                        placeholder='Title...'
                    />
                    <Input
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        label='Car Model'
                        id='car-model'
                        placeholder='VW Passat B7...'
                    />
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        label='Description'
                        id='description'
                        placeholder='Describe your post...'
                    />
                    <Input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        label='Image url'
                        id='image-url'
                        placeholder='http://....'
                    />
                    <SubmitButton title='Create' />
                </form>
            </div>
        </PageLayout>
    )
}

export default CreatePostPage;