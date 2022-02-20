import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
  document.getElementById('root'));
