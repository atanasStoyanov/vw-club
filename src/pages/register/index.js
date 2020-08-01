import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/button/submit-button';


class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }
    }

    handleChange(event, type) {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);

    }


    render() {
        const {
            username,
            password,
            rePassword
        } = this.state;

        return (
            <PageLayout>
                <div className={styles.container}>
                    <form className={styles.form}>
                    <Title title='REGISTER' />
                        <Input
                            value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label='Username'
                            id='username'
                            placeholder='Pesho'
                        />
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            label='Password'
                            id='password'
                            placeholder='******'
                        />
                        <Input
                            type='password'
                            value={rePassword}
                            onChange={(e) => this.handleChange(e, 'rePassword')}
                            label='Re-password'
                            id='re-password'
                            placeholder='******'
                        />
                        <SubmitButton title='Register'/>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;