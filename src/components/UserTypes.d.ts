export interface User {
  email: string;
  id: string;
}

export interface UserToken {
  accessToken: string;
  user: User;
}
