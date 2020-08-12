import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import ErrorMsg from '../../components/error-msg';
import SubmitButton from '../../components/button/submit-button';
import getCookie from '../../utils/getCookie';
import icon from '../../images/passat-icon.svg'
import uploadImage from '../../utils/uploadImage';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [model, setModel] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const history = useHistory();

    const uploadCarImage = (e) => {
        uploadImage(e.target.files, 'https://api.cloudinary.com/v1_1/dbnasko/image/upload', 'VWimages', setLoading, setImage);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === '') {
            setErrorMsg('Please provide Title!');
            return;
        }

        if (model === '') {
            setErrorMsg('Please specify Car Model!');
            return;
        }

        if (description === '') {
            setErrorMsg('Please provide Description!');
            return;
        }

        await fetch('http://localhost:9999/api/publication', {
            method: 'POST',
            body: JSON.stringify({
                title,
                carModel: model,
                description,
                image
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        }).then(res => {
            if (res.status === 400) {
                setErrorMsg('Title, Car Model and Description are required fields!');
                return;
            }
            history.push('/forum');
        }).catch(e => {
            setErrorMsg('Something went wrong!');
        })

    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='Create Post' />
                    <Input
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Title'
                        id='title'
                        placeholder='Title...'
                    />
                    <Input
                        value={model}
                        onChange={(e) => {
                            setModel(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Car Model'
                        id='car-model'
                        placeholder='VW Passat B7...'
                    />
                    <Textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Description'
                        id='description'
                        placeholder='Describe your post...'
                    />
                    <Input
                        type='file'
                        onChange={uploadCarImage}
                        label='Image'
                        id='image'
                        placeholder='Upload an image'
                    />
                    {
                        loading ? (<h3>Loading...</h3>) : (<div><img src={image ? image : icon} style={{ width: '300px', height: 'auto' }} alt='car' /></div>)
                    }
                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    <SubmitButton title='Create' />
                </form>
            </div>
        </PageLayout>
    )
}

export default CreatePostPage;