import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './Components/App';
import AddPage from './Components/Add/AddPage';
import HomePage from './Components/Home/HomePage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={HomePage} />
            <Route path="/add" component={AddPage} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('app'));