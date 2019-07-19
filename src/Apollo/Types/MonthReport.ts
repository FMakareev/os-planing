import {EventStatusEnum, IBase, IFile, IMassMedia, IReception} from "../schema";


export interface IPrepareModel {
  // Общее количество мероприятий за отчетный месяц
  numberOfEvents?: string;

  // Кол-во подотчетных мероприятий за отчетный период (мероприятия у которх есть отчет)
  numberOfEventsRequiringReport?: string;

  // Количество участников, присутствующих на подотчетных мероприятиях
  numberOfParticipantsPresentAtRequiringReport?: string;

  // Количество мероприятий не для выполнения основных поставленных задач (мероприятия без проекта)
  numberOfEventsNotRequiringReport?: string;

  // Количество встреч с гражданами (обращения в приемную)
  treatmentInTheReception?: string;
}

export interface IGetPrepareModelReportData {
  getPrepareMouthReport: IPrepareModel
}
export interface IGetPrepareModelReportVariables {
  reception?: string;
  date?: string;
}


export interface IMonthReport extends IBase {
  reception?: IReception;

  // Общее количество мероприятий за отчетный месяц
  numberOfEvents?: string;

  // Кол-во подотчетных мероприятий за отчетный период (мероприятия у которх есть отчет)
  numberOfEventsRequiringReport?: string;

  // Количество участников, присутствующих на подотчетных мероприятиях
  numberOfParticipantsPresentAtRequiringReport?: string;

  // Количество мероприятий не для выполнения основных поставленных задач (мероприятия без проекта)
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

  attachments: IFile[]

  zipFile?: string;
  date?: string;

  id?: string;

  pdfUrl?: string;

  status: EventStatusEnum;

}

export interface IMonthReportItemData {
  monthReportItem: IMonthReport
}

export interface IMonthReportItemVariables {
  id: string;
}



export interface ICreateMonthReportData {
  createMonthReport:{
    monthReport: IMonthReport
  }
}
export interface ICreateMonthReportVariables extends IMonthReport{

}

export interface IUpdateMonthReportData {
  updateMonthReport:{
    monthReport: IMonthReport
  }
}
export interface IUpdateMonthReportVariables extends IMonthReport{

}