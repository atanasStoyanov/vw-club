import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import profileIcon from '../../images/profile-icon.png';
import Input from '../../components/input';
import { useHistory, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/submit-button';


const UpdateProfilePage = () => {
    const [username, setUsername] = useState('');
    const [carModel, setCarModel] = useState('');
    const [avatar, setAvatar] = useState('');
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const history = useHistory();

    const id = params.userId;

    const getData = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const user = await response.json();
            setUsername(user.username);
            setCarModel(user.carModel || 'No info...');
            setAvatar(user.avatar || '');
        }
    }, [id, history])

    useEffect(() => {
        getData()
    }, [getData])

    const uploadImage = async (e) => {
        const files = e.target.files;

        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'VW-avatars');

        setLoading(true);

        const res = await fetch('https://api.cloudinary.com/v1_1/dbnasko/image/upload', {
            method: 'POST',
            body: data
        });

        const file = await res.json();

        setAvatar(file.secure_url);
        setLoading(false);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:9999/api/user/${id}`,{
            method: 'PUT',
            body: JSON.stringify({
                username,
                carModel,
                avatar
            }),
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => {
            history.push(`/profile/${id}`);
        }).catch(e => {
            console.log('Error: ', e);
        })

    }

    return (
        <PageLayout>
            <section className={styles.details}>
                <Title title='Update User info' />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label='Username'
                        id='username'
                    />
                    <Input
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                        label='Car Model'
                        id='carModel'
                    />
                    <Input
                        type='file'
                        onChange={uploadImage}
                        label='Avatar'
                        id='avatar'
                        placeholder='Upload an image'
                    />
                    {
                        loading ? (<h3>Loading...</h3>) : (<div><img src={avatar ? avatar : profileIcon} style={{ width: '300px', height: 'auto' }} alt='profile pic' /></div>)
                    }
                    <SubmitButton title='Update' />
                </form>
            </section>
        </PageLayout>
    )

}

export default UpdateProfilePage;