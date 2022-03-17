import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, sortFilmsByGenre, getAllFilms} from './action';
import {Film} from '../types/films';
import {films} from '../mocks/films';

const initialState = {
  genre: 'ALL_GENRES',
  films: films,
  filteredFilms: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, ((state, action) => {
      state.genre = action.payload;
    }))
    .addCase(sortFilmsByGenre, (state) => {
      state.filteredFilms = state.films.filter((el: Film) => el.genre === state.genre);
    })
    .addCase(getAllFilms, ((state) => {
      state.filteredFilms = state.films;
    }));
});

export {reducer};
