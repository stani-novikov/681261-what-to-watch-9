export enum AppRoute {
  Root = '/',
  AddReview = '/films/:id/review',
  Film = '/films/:id',
  MyList = '/mylist',
  Player = '/player/:id',
  SignIn = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout'
}

export enum LoginRequestStatus {
  Error = 'ERROR',
  Success = 'SUCCESS',
  Pending = 'PENDING',
  IDLE = 'IDLE'
}

export enum FilmRequestStatus {
  Error = 'ERROR',
  Success = 'SUCCESS',
  Pending = 'PENDING',
  IDLE = 'IDLE'
}

export type CommentData = {
  id: string,
  rating: number,
  comment: string,
}
