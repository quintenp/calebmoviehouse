import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AddPage from './Add/AddPage';
import HomePage from './Home/HomePage';
import LibraryPage from './Library/LibraryPage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <h1>Calebs Movie House</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        {' '}
                        <Link to="/add">Add</Link>
                        {' '}
                        <Link to="/library">Library</Link>
                    </nav>


                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/add" component={AddPage} />
                        <Route path="/library" component={LibraryPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;