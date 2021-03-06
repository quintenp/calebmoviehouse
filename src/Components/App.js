import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddPage from './Add/AddPage';
import HomePage from './Home/HomePage';
import LibraryPage from './Library/LibraryPage';
import MastHead from './Common/MastHead';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <MastHead />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/add" component={AddPage} />
                        <Route path="/library" component={LibraryPage} />
                        <Route component={HomePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;