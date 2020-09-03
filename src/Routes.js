import React, { Suspense, Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import './App.css';
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'

const authRouth = (Component) => () => {
    if (localStorage.getItem('token') === 'admin@appmoview.com') {
        return <Component />
    } else {
        return <Redirect to='/login' />
    }
}

function Routes(props) {
    return (
        <Router {...props}>
            <Switch>
                <Route exact path='/'>
                    {authRouth(Dashboard)}
                </Route>
                <Route path='/login'>
                    <SignIn />
                </Route>
                {/* <Route path="/dashboard">
                </Route> */}

            </Switch>
        </Router>
    );
}

export default Routes;
