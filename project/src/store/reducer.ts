import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, setFilms, toggleFilmsLoadingFlag} from './action';
import { Film } from '../types/films';

export type StoreState = {
  genre: string;
  films: Film[];
  isFilmsLoaded: boolean;
}

const initialState: StoreState = {
  genre: 'All genres',
  films: [],
  isFilmsLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(toggleFilmsLoadingFlag, (state) => {
      state.isFilmsLoaded = !state.isFilmsLoaded;
    });
});

export {reducer};
