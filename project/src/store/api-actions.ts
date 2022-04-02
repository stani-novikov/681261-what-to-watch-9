import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import {APIRoute, AuthorizationStatus, CommentData, FilmRequestStatus, LoginRequestStatus} from '../const';
import {dropToken, saveToken} from '../services/helpers';
import { Film } from '../types/films';
import { AuthData, UserData } from '../types/user';
import {
  setFilms,
  toggleFilmsLoadingFlag,
  requireAuthorization,
  changeLoginRequestStatus,
  setUserData,
  setFilmData, changeFilmRequestStatus, setSimilarFilms, setFilmComments
} from './action';
import {Review} from '../types/review';

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
    const { data } = await api.get<UserData>(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(setUserData(data));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(setUserData(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(changeLoginRequestStatus(LoginRequestStatus.Success));
    } catch (err) {
      store.dispatch(changeLoginRequestStatus(LoginRequestStatus.Error));
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchFilmAction = createAsyncThunk('film/fetchFilm',
  async (filmId: number) => {
    try {
      store.dispatch(changeFilmRequestStatus(FilmRequestStatus.Pending));
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(setFilmData(data));
      store.dispatch(changeFilmRequestStatus(FilmRequestStatus.Success));
    } catch (error) {
      store.dispatch(changeFilmRequestStatus(FilmRequestStatus.Error));
    }
  },
);

export const fetchSimilarFilmAction = createAsyncThunk('film/fetchSimilarFilmAction',
  async (filmId: number) => {
    const {data} = await api.get<Film[]>(`/films/${filmId}/similar`);
    store.dispatch(setSimilarFilms(data));
  },
);

export const fetchFilmCommentsAction = createAsyncThunk('film/fetchFilmCommentsAction',
  async (filmId: number) => {
    const {data} = await api.get<Review[]>(`/comments/${filmId}`);
    store.dispatch(setFilmComments(data));
  },
);

export const sendCommentAction = createAsyncThunk('film/addComments',
  async ({id, comment, rating}: CommentData) => {
    await api.post<CommentData>(`/comments/${id}`, {rating, comment});
  });
