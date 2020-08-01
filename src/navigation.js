import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import RegisterPage from './pages/register';
import HomePage from './pages/home';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/register' component={RegisterPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;