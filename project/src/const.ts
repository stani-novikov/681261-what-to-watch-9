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
