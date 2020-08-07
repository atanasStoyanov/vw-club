import React, { useState } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import { useHistory } from 'react-router-dom';
import SubmitButton from '../../components/button/submit-button';
import getCookie from '../../utils/getCookie';
import icon from '../../images/passat-icon.svg'

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [model, setModel] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');

    const history = useHistory();

    const uploadImage = async (e) => {
        const files = e.target.files;

        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'VWimages');

        setLoading(true);

        const res = await fetch('https://api.cloudinary.com/v1_1/dbnasko/image/upload', {
            method: 'POST',
            body: data
        });

        const file = await res.json();

        setImage(file.secure_url);
        setLoading(false);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:9999/api/publication',{
            method: 'POST',
            body: JSON.stringify({
                title,
                carModel: model,
                description,
                image
            }),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : getCookie('x-auth-token')
            }
        }).then(res => {
            history.push('/forum');
        }).catch(e => {
            console.log('Error: ', e);
        })

    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
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
                        type='file'
                        onChange={uploadImage}
                        label='Image'
                        id='image'
                        placeholder='Upload an image'
                    />
                    {
                        loading ? (<h3>Loading...</h3>) : (<div><img src={image ? image : icon} style={{width:'300px', height:'auto'}} alt='car'/></div>)
                    }
                    <SubmitButton title='Create' />
                </form>
            </div>
        </PageLayout>
    )
}

export default CreatePostPage;