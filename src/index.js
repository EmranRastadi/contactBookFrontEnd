import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import reducer from './store/reducer'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import history from "./components/history";
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
