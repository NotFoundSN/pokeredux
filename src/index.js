import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pokemonReducer from './reducers/pokemons';
import {logger} from './middleware/index';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnchancers = compose(/*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),*/
  applyMiddleware(logger));

const store = createStore(pokemonReducer, composedEnchancers)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
