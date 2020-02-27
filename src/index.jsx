import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const store = createStore(reducer);


const render = (Component) => {

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render(Game);
