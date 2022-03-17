import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('filters-list/changeGenre');
export const sortFilmsByGenre = createAction('films/sortFilmsByGenre');
export const getAllFilms = createAction<string>('films/getAllFilms');


