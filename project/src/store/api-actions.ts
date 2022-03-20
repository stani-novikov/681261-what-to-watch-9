import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../const';
import { Film } from '../types/films';
import { setFilms, toggleFilmsLoadingFlag } from './action';

export const fetchFilmsAction = createAsyncThunk(
  'data/films',
  async () => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(setFilms(data));
    store.dispatch(toggleFilmsLoadingFlag());
  },
);
