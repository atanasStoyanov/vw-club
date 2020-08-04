import React, { useState, useContext } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/button/submit-button';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUername] = useState('');
    const [password, setPassword] = useState('');
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
            (e) => console.log('Error: ', e));
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='LOGIN' />
                    <Input
                        value={username}
                        onChange={(e) => setUername(e.target.value)}
                        label='Username'
                        id='username'
                        placeholder='Pesho'
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label='Password'
                        id='password'
                        type='password'
                        placeholder='******'
                    />
                    <SubmitButton title='Login' />
                </form>
            </div>
        </PageLayout>
    )
}

export default LoginPage;