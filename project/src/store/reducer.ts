import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  setFilms,
  requireAuthorization,
  toggleFilmsLoadingFlag,
  changeLoginRequestStatus,
  setUserData
} from './action';
import { Film } from '../types/films';
import {AuthorizationStatus, LoginRequestStatus} from '../const';
import {UserData} from '../types/user';

export type StoreState = {
  genre: string;
  films: Film[];
  isFilmsLoaded: boolean;
  authorizationStatus: string;
  loginRequestStatus: string;
  user: UserData | null ;
}

const initialState: StoreState = {
  genre: 'All genres',
  films: [],
  isFilmsLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginRequestStatus: LoginRequestStatus.IDLE,
  user: null,
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
      localStorage.setItem('user-avatar', action.payload.avatarUrl);
    });
});

export {reducer};
