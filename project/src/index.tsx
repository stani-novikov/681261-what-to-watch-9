import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {films} from './mocks/films';

const APP_PROPS = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={APP_PROPS.title}
        genre={APP_PROPS.genre}
        year={APP_PROPS.year}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
