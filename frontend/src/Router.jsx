import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Home from './containers/Home'


const Router = () => {
    return (
        <>
            <Switch>
                <Header/>
                <Route exact path={'/'} component={Home} />     
            </Switch>
        </>
    );
};
export default Router;
