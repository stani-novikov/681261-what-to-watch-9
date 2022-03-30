const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';

export type Token = string;

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};
