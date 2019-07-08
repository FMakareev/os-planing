import {IReport} from "../Types/Types";

export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}

export interface IBase {
  created?: string;
  updated?: string;
}

export interface IPagination<IDate = any> {
  count: number;
  items: IDate[];
  pageInfo: {
    nextPage: number;
    prevPage: number;
  };
  __typename: string;
}

export interface IRelation {

}

export interface IFile extends IBase {
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

export interface IUser extends IBase {
  email: string;
  avatar?: IFile | null;
  role: UserRoleEnum;
  fullName: string;
  id?: string;
}

export interface IReception extends IBase {
  id: string;
  city: string;
  user: IUser;
  updated: string;
  created: string;
}

export interface IReceptionData {
  reception: IReception
}

export interface ICreateReceptionData {
  data: {
    createReception: {
      reception: IReception
    }
  }
}
export interface IUpdateReceptionData {
  data: {
    updateReception: {
      reception: IReception
    }
  }
}


export interface IUpdateUserData extends IBase {
  data:{
    updateUser: {
      user: IUser
    }
  }

}
export interface IUpdateUserDataVariables extends IBase {
 id: string;
 avatar?: string;
 email?: string;
 fullName?: string;
}


export interface IProject extends IBase {
  id?: string;
  name?: string;
}

export interface ICreateProjectData {
  data: {
    createProject: {
      project: IProject
    }
  }
}
export interface IUpdateProjectData {
  data: {
    updateProject: {
      project: IProject
    }
  }
}


export interface IUserChangePassword {
  changePassword: {
    user: IUser
  }
}

export interface IUserChangePasswordVariables {
  id: string;
  newPassword: string;
  oldPassword: string;
}

export interface ISMTPSettings  extends IBase{
  host: string;
  port: string;
  login: string;
  password: string;
  tlsUse: boolean;
}


interface IMassMedia {
  id: string;
  title: string;
  link: string;
}

export interface IMonthReport {
  reception?: IReception;

  // Общее количество мероприятий за отчетный месяц
  numberOfEvents?: string;

  // Кол-во подотчетных мероприятий за отчетный период
  numberOfEventsRequiringReport?: string;

  // Количество участников, присутствующих на подотчетных мероприятиях
  numberOfParticipantsPresentAtRequiringReport?: string;

  // Количество мероприятий не для выполнения основных поставленных задач
  numberOfEventsNotRequiringReport?: string;

  // Количество встреч с гражданами (обращения в приемную)
  treatmentInTheReception?: string;


  // текущая деятельность приемной
  currentActivity?: string;

  //значимые итоги/достижения деятельности приемной
  receptionAchievement?: string;

  // основные проблемы, с которыми столкнулись сотрудники приемной при работе в отчетный период
  mainProblems?: string;

  // Описание основных проблемных тем в городе и на предпиятии за отчетный период
  descriptionOfTheMainProblemTopics?: string;

  // Ожидаемые отрицательные события в следующем за отчетным периодом месяце
  expectedNegativeEvents?: string;

  // Какие проблемы били решены в городе и на предпиятии за отчетный период
  whatProblemsWereSolved?: string;

  // Конфликты, недовольство, возмущения граждан. Ключевые решения.
  keyConflictResolution?: string;

  // Ссылки на СМИ о мероприятиях
  massMedia?: IMassMedia[];

  attachments?: IFile[] | any[]

}

export interface INotification extends  IBase{
  id?: string;
  isRead?: boolean;
  message?: string;
  typeOfReport?: string;
  report?: IReport;
  fromUser?: IUser;
  toUser?: IUser;
}








export interface Query {
  projectList: IProject;
  projectItem: IProject;
}

//
// export type Mutation {
//
// }

