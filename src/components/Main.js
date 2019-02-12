import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Landing';
import NewEntryForm from './NewEntryForm';
import Progress from './Progress';
import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';

//route links for project
const Main = () => (
    <Switch>
        <Route exact path="/" component={RegisterUser}/>
        <Route exact path="/loginuser" component={LoginUser}/>
        <Route exact path="/home" component = {Landing}/>
        <Route exact path="/newentryform" component={NewEntryForm}/>
        <Route exact path="/progress" component={Progress}/>
    </Switch>
);
export default Main;

