
export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}

export interface IBase {
  created: string;
  updated: string;
}

export interface IRelation {

}

export interface File extends IBase {
  ext: string;
  id: string;
  mime: string;
  name: string;
  provider: string;
  related: IRelation[];
  sha256: string;
  size: number;
  url: string;
  updated: string;
  created: string;
}

export interface IUser extends IBase{
  email: string;
  avatar?: File | null;
  role: UserRoleEnum;
  fullName: string;
  id?: string;
}

export interface IReception extends IBase{
  id: string;
  city: string;
  user: IUser;
  updated: string;
  created: string;
}

export interface IReceptionData {
  reception: IReception
}




export interface IProject extends IBase{
  name: string;
}


export interface Query {
  projectList: IProject;
  projectItem: IProject;
}

//
// export type Mutation {
//
// }

