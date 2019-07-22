import {IMonthReport} from "./Types/MonthReport";

export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}


export enum EventStatusEnum {
  waitReport = 'waitReport',
  waitReview = 'waitReview',
  ok = 'ok',
  noReport = 'noReport',
}


export enum NotificationTypeEnum {
  /**
   * Запроса на сохранение отчета, вызывается когда обновляется событие и ему ставится статус WAIT_REVIEW
   * либо когда создается отчет createReport
   * */
  NOTIFICATION_TYPE_QUERY_SAVE_REPORT = 'NOTIFICATION_TYPE_QUERY_SAVE_REPORT',

  /**
   * Создание нового мероприятия приходит админу, создается в createEvent
   * */
  NOTIFICATION_TYPE_CREATE_EVENT = 'NOTIFICATION_TYPE_CREATE_EVENT',
  /**
   * Создание нового мероприятия приходит админу, создается в createEvent
   * */
  NOTIFICATION_TYPE_UPDATE_EVENT = 'NOTIFICATION_TYPE_UPDATE_EVENT',

  /**
   * Удаление мероприятия
   * */
  NOTIFICATION_TYPE_DELETE_EVENT = 'NOTIFICATION_TYPE_DELETE_EVENT',

  /**
   * Запрос отчета вызывается в updateEvent когда статус события == WAIT_REPORT (ожидает отчета)
   * */
  NOTIFICATION_TYPE_QUERY_GET_REPORT = 'NOTIFICATION_TYPE_QUERY_GET_REPORT',

  /**
   * Одобрение отчета, вызывается в updateEvent когда статус события == OK (одобрено)
   * */
  NOTIFICATION_TYPE_APPROVED_REPORT = 'NOTIFICATION_TYPE_APPROVED_REPORT',

  NOTIFICATION_TYPE_APPROVED_MONTH_REPORT = 'NOTIFICATION_TYPE_APPROVED_MONTH_REPORT',  // Одобрение месячного отчета
  NOTIFICATION_TYPE_QUERY_GET_MONTH_REPORT = 'NOTIFICATION_TYPE_QUERY_GET_MONTH_REPORT',  // Запрос месячного отчета
  NOTIFICATION_TYPE_QUERY_SAVE_MONTH_REPORT = 'NOTIFICATION_TYPE_QUERY_SAVE_MONTH_REPORT', // Запроса на сохранение месячного отчета,
  NOTIFICATION_TYPE_QUERY_UPDATE_MONTH_REPORT = 'NOTIFICATION_TYPE_QUERY_UPDATE_MONTH_REPORT' // Запроса на обовления месячного отчета
}




export interface IBase {
  created?: string;
  updated?: string;
}


export interface IPageInfo {
  currentPage: number
  limit: number
  nextPage: number
  prevPage: number
}

export interface IPagination<IDate = any> {
  count: number;
  items: IDate[];
  pageInfo: IPageInfo;
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
  password?: string;
  reception: {
    id: string;
    city: string;
  }
}

export interface IReception extends IBase {
  id: string;
  city: string;
  user: IUser;
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


export interface IReceptionPagination {
  receptionPagination: IPagination<IReception>;
}


export interface IUpdateUserData extends IBase {
  data: {
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


export interface IProjectPagination {
  projectPagination: IPagination<IProject>;
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

export interface ISMTPSettings extends IBase {
  host: string;
  port: string;
  login: string;
  password: string;
  tlsUse: boolean;
}


export interface IMassMedia {
  id: string;
  title: string;
  link: string;
}

export enum TypeOfReportEnum {
  monthly = 'monthly',
  noMonthly = '',
}

export interface INotification extends IBase {
  id?: string;
  isRead?: boolean;
  message?: string;
  typeOfReport?: TypeOfReportEnum;
  report?: IReport;
  monthReport?: IMonthReport;
  event: IEvent;
  fromUser?: IUser;
  toUser?: IUser;
  type: NotificationTypeEnum
}


export interface IEvent {
  date: string;
  id: string;
  projects?: IProject[];
  reception: {
    city: string;
    id?: string;
  };
  report?: string;
  status: EventStatusEnum;
  statusUpdated: string;
  text: string;
  title: string;
  // Прикрепить файлы (программа, презентации, протокол и т.п., фото)
  attachments: IFile[];
  zipFile?: string;
}


export interface IEventItemData {
  eventItem: IEvent
}


export interface IEventCreateVariables {
  date: string;
  id: string;
  projects: any[];
  reception: any;
  status?: EventStatusEnum;
  statusUpdated?: string;
  text: string;
  title: string;
  attachments: any[];
}


export interface IEventItemVariables {
  id: string;
}


export interface IReceptionCalendar {
  reception: IReception;
  priorityStatus: EventStatusEnum;
  eventCount: number;
  events: IEvent[];
  monthReport: IMonthReport;
}


export interface IUpdateEventData {
  updateEvent: {
    event: IEvent
  }
}

export interface IUpdateEventVariables {
  date: string;
  id: string;
  projects: string[];
  reception: string;
  status: EventStatusEnum,
  text: string;
  title: string;
}

export interface ICreateEventData {
  createEvent: {
    event: IEvent
  }
}

export interface ICreateEventVariables {
  date: string;
  projects: string[];
  reception: string;
  status: EventStatusEnum,
  text: string;
  title: string;
}


export interface IDayWeek {
  date?: any;
  receptions?: IReceptionCalendar[];
}


export interface IWeek {
  monday: IDayWeek;
  tuesday: IDayWeek;
  wednesday: IDayWeek;
  thursday: IDayWeek;
  friday: IDayWeek;
  saturday: IDayWeek;
  sunday: IDayWeek;
  __typename: string;
}


export interface GetSimpleCalendarData {
  getSimpleCalendar: IWeek;
}


export interface GetSimpleCalendarVariables {
  time: string;
}


/** получить календарь с фильтром по проекту */
export interface GetCalendarByProjectData {
  getCalendarByProject: IWeek;
}

export interface GetCalendarByProjectVariables {
  time: string;
  project?: string;
}

/** получить календарь с фильтром по приемной */
export interface GetCalendarByReceptionData {
  getCalendarByReception: IWeek;
}

export interface GetCalendarByReceptionVariables {
  time: string;
  reception: string;
}

/** получить календарь с фильтром по приемной и проекту */
export interface GetCalendarByReceptionAndProjectData {
  getCalendarByReception: IWeek;
}

export interface GetCalendarByReceptionAndProjectVariables {
  time: string;
  reception: string;
  project: string;
}


export interface IReport extends IBase {
  id: string;
  // Наименование мероприятия, Дата проведения мероприятия, Время проведения мероприятия
  event: IEvent;
  // Место проведения мероприятия
  place: string;

  // Задача (зачем было проведено мероприятие)
  task: string;
  // Кто поставил задачу (ФИО, место работы)
  producer: string;
  // Цели мероприятия
  goals: string;
  // Количество встреч с гражданами (обращения в приемную)
  treatmentInTheReception: string;
  // Количество участников, присутствовавших на мероприятии
  participantsCount: number;
  // ФИО основных участников
  participantsAbout: string;
  // Описание мероприятия
  about: string;
  // Ссылки СМИ о мероприятии
  massMedia: IMassMedia[];
  // Прикрепить файлы (программа, презентации, протокол и т.п., фото)
  attachments: IFile[];

  zipFile?: string;
  pdfUrl: string
}


export interface IReportItemData {
  reportItem: IReport
}

export interface IReportItemVariables {
  id: string;
}


export interface ICreateReportData {
  createReport: {
    report: IReport
  }
}

export interface ICreateReportVariables {
  about: string
  attachments: any[]
  event: string[]
  goals: string
  massMedia: IMassMediaInput[]
  participantsAbout: string
  participantsCount: number
  place: string
  producer: string
}

export interface IUpdateReportData {
  updateReport: {
    report: IReport
  }
}

export interface IMassMediaInput {
  title: string;
  link: string;
}

export interface IUpdateReportVariables {
  id: string
  about: string
  attachments: any[]
  event: string[]
  goals: string
  massMedia: IMassMediaInput[]
  participantsAbout: string
  participantsCount: number
  place: string
  producer: string
}


export interface IPrivacyBlock extends IBase {
  content: string;
  id?: string;
  index: number;
  title: string;
}

export interface IPrivacyBlockList {
  privacyBlockList: IPrivacyBlock[]
}

export interface ICreatePrivacyBlockData {
  createPrivacy: {
    privacy: IPrivacyBlock
  }
}

export interface IUpdatePrivacyBlockData {
  updatePrivacy: {
    privacy: IPrivacyBlock
  }
}

export interface Query {
  projectList: IProject;
  projectItem: IProject;
}

//
// export type Mutation {
//
// }

