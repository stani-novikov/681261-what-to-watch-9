import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, setFilms, requireAuthorization, toggleFilmsLoadingFlag} from './action';
import { Film } from '../types/films';
import { AuthorizationStatus } from '../const';

export type StoreState = {
  genre: string;
  films: Film[];
  isFilmsLoaded: boolean;
  authorizationStatus: string;
}

const initialState: StoreState = {
  genre: 'All genres',
  films: [],
  isFilmsLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
