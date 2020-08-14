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
import CreatePostPage from './pages/create-post';
import PostDetailsPage from './pages/details-post';
import ProfilePage from './pages/profile';
import UpdateProfilePage from './pages/update-profile';
import ErrorPage from './pages/error';

const Navigation = () => {

    const context = useContext(UserContext);

    const {
        loggedIn
    } = context;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/register'>
                    {!loggedIn ? (<RegisterPage />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/login'>
                    {!loggedIn ? (<LoginPage />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/forum' exact>
                    {loggedIn ? (<ForumPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/forum/create-post'>
                    {loggedIn ? (<CreatePostPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/forum/post/:postId' >
                    {loggedIn ? (<PostDetailsPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/profile/:userId' >
                    {loggedIn ? (<ProfilePage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/update-profile/:userId' >
                    {loggedIn ? (<UpdateProfilePage />) : (<Redirect to='/login' />)}
                </Route>
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;