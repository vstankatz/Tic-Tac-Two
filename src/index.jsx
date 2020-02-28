import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const store = createStore(reducer);

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
);

const render = (Component) => {

  ReactDOM.render(
    <HashRouter>
    <Provider store={store}>
        <Component />
    </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
}

render(Game);
