import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const mainPageProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={mainPageProps.title}
      genre={mainPageProps.genre}
      year={mainPageProps.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
