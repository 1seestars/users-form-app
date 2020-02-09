import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import Root from './components/routing/Root'

export const store = createStore(rootReducer)

ReactDOM.render(<Root store={store} />, document.getElementById('root'));