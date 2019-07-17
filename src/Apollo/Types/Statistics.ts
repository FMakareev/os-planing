import {IProject, IPagination, IReception} from "../schema";




export interface IStatisticProject {
  project?: IProject
  expectedValue: number // мат ожидание
  dispersion: number // дисперсия
  sum: number // общее кол-во отчетов
}

export interface IGetProjectStatisticData {
  getProjectStatistic: IPagination<IStatisticProject> & {attachment: string}
}

export interface IGetProjectStatisticVariables  {
  page?: number;
  limit?: number;
  startDate?: string;
  stopDate?: string;
  reception?: string;
}



export interface IStatisticReception {
  reception?: IReception;
  expectedValue: number
  dispersion: number
  sum: number
}

export interface IGetReceptionStatisticData {
  getReceptionStatistic: IPagination<IStatisticReception> & {attachment: string}
}

export interface IGetReceptionStatisticVariables  {
  page?: number;
  limit?: number;
  startDate?: string;
  stopDate?: string;
  project?: string;
}