import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

const APP_PROPS = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={APP_PROPS.title}
      genre={APP_PROPS.genre}
      year={APP_PROPS.year}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
