import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken } from '../services/helpers';
import { Film } from '../types/films';
import { AuthData, UserData } from '../types/user';
import { setFilms, toggleFilmsLoadingFlag, requireAuthorization } from './action';

export const fetchFilmsAction = createAsyncThunk(
  'data/films',
  async () => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(setFilms(data));
    store.dispatch(toggleFilmsLoadingFlag());
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/auth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
