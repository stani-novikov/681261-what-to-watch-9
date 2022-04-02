import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  setFilms,
  requireAuthorization,
  toggleFilmsLoadingFlag,
  changeLoginRequestStatus,
  setUserData, setFilmData, changeFilmRequestStatus, setSimilarFilms, setFilmComments
} from './action';
import { Film } from '../types/films';
import {AuthorizationStatus, FilmRequestStatus, LoginRequestStatus} from '../const';
import {UserData} from '../types/user';
import {Review} from '../types/review';

export type StoreState = {
  genre: string;
  films: Film[];
  isFilmsLoaded: boolean;
  authorizationStatus: string;
  loginRequestStatus: string;
  filmRequestStatus: string;
  user: UserData | null;
  film: Film | undefined;
  similarFilms: Film[] | null;
  filmComments: Review[] | null;
}

const initialState: StoreState = {
  genre: 'All genres',
  films: [],
  isFilmsLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginRequestStatus: LoginRequestStatus.IDLE,
  filmRequestStatus: FilmRequestStatus.IDLE,
  user: null,
  film: undefined,
  similarFilms: null,
  filmComments: null,
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
    })
    .addCase(changeLoginRequestStatus, (state, action) => {
      state.loginRequestStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFilmData, (state, action) => {
      state.film = action.payload;
    })
    .addCase(changeFilmRequestStatus, (state, action) => {
      state.filmRequestStatus = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilmComments, (state, action) => {
      state.filmComments = action.payload;
    });
});

export {reducer};
