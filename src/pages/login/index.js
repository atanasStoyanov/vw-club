import React, { useState, useContext } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/button/submit-button';
import ErrorMsg from '../../components/error-msg';
import InfoSection from '../../components/info-section';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        await authenticate('http://localhost:9999/api/user/login',
            {
                username,
                password
            },
            (user) => {
                console.log('Login Successfull');
                context.logIn(user);
                history.push('/');
            },
            (e) => {
                setErrorMsg('Invalid username or password')
            });
    }

    return (
        <PageLayout>
            <InfoSection
                title='Welcome back'
                message='Sign in to your account and start exploring the VW Passat Club Web page!'
                info=''
            />
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles['user-icon']}>
                        <FontAwesomeIcon icon={faUser} size='6x' />
                    </div>
                    <Title title='Sign with your account' />
                    <Input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Username'
                        id='username'
                        placeholder='Pesho'
                    />
                    <Input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setErrorMsg(null)
                        }}
                        label='Password'
                        id='password'
                        type='password'
                        placeholder='******'
                    />
                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    <SubmitButton title='Login' />
                </form>
            </div>
        </PageLayout>
    )
}

export default LoginPage;