import React, { useContext } from 'react';
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
import ForumPage from './pages/forum';

const Navigation = () => {

    const context = useContext(UserContext);

    const {
        loggedIn
    } = context;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/forum'>
                    {loggedIn ? (<ForumPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/register'>
                    {!loggedIn ? (<RegisterPage />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/login'>
                    {!loggedIn ? (<LoginPage />) : (<Redirect to='/' />)}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;