import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const AppProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={AppProps.title}
      genre={AppProps.genre}
      year={AppProps.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
