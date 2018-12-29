import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Landing';
import NewEntryForm from './NewEntryForm';
import Progress from './Progress';

//route links for project
const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/newentryform" component={NewEntryForm}/>
        <Route exact path="/progress" component={Progress}/>
    </Switch>
);
export default Main;

