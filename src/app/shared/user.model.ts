export class User {
  email: string;
  password: string;
  password_confirmation: string;
}
export class LoginForm {
  email: string;
  password: string;
}
export class LoginOAuthForm {
  grant_type: string;
  username: string;
  password: string;
  client_id: string;
  client_secret: string;
}
