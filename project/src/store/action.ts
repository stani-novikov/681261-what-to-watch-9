import {createAction} from '@reduxjs/toolkit';
import { Film } from '../types/films';

export const changeGenre = createAction<string>('filters-list/changeGenre');
export const setFilms = createAction<Film[]>('films/setFilms');
export const toggleFilmsLoadingFlag = createAction('films/toggleFilmsLoadingFlag');
export const requireAuthorization = createAction<string>('user/requireAuthorization');
export const changeLoginRequestStatus = createAction<string>('user/changeLoginRequestStatus');

