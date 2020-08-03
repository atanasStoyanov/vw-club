import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import UserContext from './Context';

class Navigation extends Component {

    static contextType = UserContext;

    render() {
        const {
            loggedIn
        } = this.context;

        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    {!loggedIn ? <Route path='/register' component={RegisterPage} /> : <Redirect to='/'/>}
                    {!loggedIn ? <Route path='/login' component={LoginPage} /> : <Redirect to='/' />}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Navigation;