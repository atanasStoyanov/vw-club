import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import SubmitButton from '../../components/button/submit-button';
import authenticate from '../../utils/authenticate';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const {
            username,
            password
        } = this.state;

        await authenticate('http://localhost:9999/api/user/login',
            {
                username,
                password
            },
            () => {
                console.log('Login Successfull');
                this.props.history.push('/');
            },
            (e) => console.log('Error: ', e));
    }


    render() {
        const {
            username,
            password
        } = this.state;

        return (
            <PageLayout>
                <div className={styles.container}>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <Title title='LOGIN' />
                        <Input
                            value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label='Username'
                            id='username'
                            placeholder='Pesho'
                        />
                        <Input
                            value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
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
}

export default LoginPage;