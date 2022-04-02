import {createAction} from '@reduxjs/toolkit';
import { Film } from '../types/films';
import {UserData} from '../types/user';
import {Review} from '../types/review';

export const changeGenre = createAction<string>('filters-list/changeGenre');
export const setFilms = createAction<Film[]>('films/setFilms');
export const toggleFilmsLoadingFlag = createAction('films/toggleFilmsLoadingFlag');
export const requireAuthorization = createAction<string>('user/requireAuthorization');
export const changeLoginRequestStatus = createAction<string>('user/changeLoginRequestStatus');
export const setUserData = createAction<UserData>('user/setUserData');
export const setFilmData = createAction<Film>('film/setFilmData');
export const changeFilmRequestStatus= createAction<string>('film/changeFilmRequestStatus');
export const setSimilarFilms = createAction<Film[]>('film/setSimilarFilms');
export const setFilmComments = createAction<Review[]>('film/setFilmComments');


