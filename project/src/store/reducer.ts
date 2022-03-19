import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, setFilms} from './action';
import { Film } from '../types/films';

export type StoreState = {
  genre: string;
  films: Film[];
}

const initialState: StoreState = {
  genre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});

export {reducer};
