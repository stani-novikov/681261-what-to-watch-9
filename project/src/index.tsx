import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';

const APP_PROPS = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={APP_PROPS.title}
        genre={APP_PROPS.genre}
        year={APP_PROPS.year}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
