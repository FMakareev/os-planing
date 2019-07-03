
export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}


export interface IUser {
  email: string;
  password: string;
  avatar: any;
  role: UserRoleEnum;
}