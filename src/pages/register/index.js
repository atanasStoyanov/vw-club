import React, { useState, useContext } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/button/submit-button';
import ErrorMsg from '../../components/error-msg';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== rePassword) {
            setErrorMsg('Passwords do not match');
            return;
        }

        await authenticate('http://localhost:9999/api/user/register',
            {
                username,
                password,
                rePassword,
                carModel: '',
                avatar: ''
            },
            (user) => {
                console.log('Successfull registration');
                context.logIn(user);
                history.push('/');
            },
            (e) => console.log('Error: ', e));
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='REGISTER' />
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label='Username'
                        id='username'
                        placeholder='Pesho'
                    />
                    <Input
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Password'
                        id='password'
                        placeholder='******'
                    />
                    <Input
                        type='password'
                        value={rePassword}
                        onChange={(e) => {
                            setRePassword(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Re-password'
                        id='re-password'
                        placeholder='******'
                    />
                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    <SubmitButton title='Register' />
                </form>
            </div>
        </PageLayout>
    )
}

export default RegisterPage;