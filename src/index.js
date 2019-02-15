import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { Provider } from "react-redux";
import configureStore from "./store/index";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app')
);