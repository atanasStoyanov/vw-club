import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import ErrorMsg from '../../components/error-msg';
import SubmitButton from '../../components/button/submit-button';
import icon from '../../images/passat-icon.svg';
import Textarea from '../../components/textarea';
import uploadImage from '../../utils/uploadImage';
import getCookie from '../../utils/getCookie';

const UpdatePostPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [carModel, setCarModel] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const history = useHistory();
    const params = useParams();

    const id = params.postId;
    
    const getPost = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/publication/details?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const post = await response.json();
            setTitle(post.title);
            setDescription(post.description);
            setCarModel(post.carModel);
            setImage(post.image || '');
        }
    }, [id, history])

    useEffect(() => {
        getPost()
    }, [getPost])

    const uploadCarImage = (e) => {
        uploadImage(e.target.files, 'https://api.cloudinary.com/v1_1/dbnasko/image/upload', 'VWimages', setLoading, setImage);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setErrorMsg('You cannot submit empty Title!');
            return;
        }

        if (!carModel) {
            setErrorMsg('Please specify car model!');
            return;
        }

        if (!description) {
            setErrorMsg('Please provide description!');
            return;
        }

        await fetch(`http://localhost:9999/api/publication/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                carModel,
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
            history.push(`/forum/post/${id}`)
        }).catch(e => {
            history.push('/error');
        });
    }

    return (
        <PageLayout>
            <section className={styles.details}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='Update Post' />
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
                        value={carModel}
                        onChange={(e) => {
                            setCarModel(e.target.value);
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
                    <SubmitButton title='Update' />
                </form>
            </section>

        </PageLayout>
    )
}

export default UpdatePostPage