import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import ErrorMsg from '../../components/error-msg';
import profileIcon from '../../images/profile-icon.png';
import { useHistory, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/submit-button';
import uploadImage from '../../utils/uploadImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';


const UpdateProfilePage = () => {
    const [username, setUsername] = useState('');
    const [carModel, setCarModel] = useState('');
    const [avatar, setAvatar] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
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


    const uploadAvatar = (e) => {
        uploadImage(e.target.files, 'https://api.cloudinary.com/v1_1/dbnasko/image/upload', 'VW-avatars', setLoading, setAvatar);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !username.match(/^[a-zA-z0-9]{3,}$/)) {
            setErrorMsg('Username must consist only letters and digits and to be atleast 3 charecters long!');
            return;
        }

        await fetch(`http://localhost:9999/api/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                username,
                carModel,
                avatar
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {

            if (res.status === 400) {
                setErrorMsg('Username must consist only letters and digits and to be atleast 3 charecters long!');
                return;
            }
            history.push(`/profile/${id}`);
        }).catch(e => {
            history.push('/error');
        })

    }

    return (
        <PageLayout>
            <section className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles['user-icon']}>
                        <FontAwesomeIcon icon={faUserEdit} size='5x' />
                    </div>
                    <Title title='Update User details' />
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
                        onChange={uploadAvatar}
                        label='Avatar'
                        id='avatar'
                        placeholder='Upload an image'
                    />
                    <div className={styles['media-container']}>

                    {
                        loading ? (<h3>Loading...</h3>) : (<div className={styles.media}><div className={styles.inner}><img src={avatar ? avatar : profileIcon} alt='profile pic' /></div></div>)
                    }
                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    </div>
                    <SubmitButton title='Update' icon={faUserEdit}/>
                </form>
            </section>
        </PageLayout>
    )

}

export default UpdateProfilePage;