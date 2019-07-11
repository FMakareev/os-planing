import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {ReportContentCell} from "../../../../Components/ReportContentCell/ReportContentCell";
import {Breadcrumbs} from '../../../../Components/Breadcrumbs/Breadcrumbs';
import ProjectPlace from "../../../../Components/ProjectPlace/ProjectPlace";
import ReceptionActivitiesReport from '../ReceptionActivitiesReport/ReceptionActivitiesReport';
import {IMonthReport} from '../../../../Apollo/schema';
import EventBreadcrumbs from "../../Views/MonthReportEdit";

interface IReportItemContentProps {

  data?: IMonthReport;

  [prop: string]: any
}

export const MonthReportItemContent: React.FC<IReportItemContentProps> = ({date,
                                                                            id}) => (
  <React.Fragment>
    <EventBreadcrumbs
      date={date}
      id={id}
    />

    <PageTitle>
      Проект модернизации театра юного зрителя по адресу ул. Петропавловская, д. 54
    </PageTitle>
    <div className="inner__content">
      <ProjectPlace>
        Зеленогорск
      </ProjectPlace>


      <ReceptionActivitiesReport/>

      <div className="br"/>

      <ReportContentCell
        label={'Описание отчетного периода: текущая деятельность приемной'}
        content={'Геодезическая линия, как следует из вышесказанного, осмысленно стабилизирует аксиоматичный интеграл по ориентированной области. Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать.'}
      />

      <ReportContentCell
        label={'Описание отчетного периода: значимые итоги/достижения деятельности приемной'}
        content={'Расходящийся ряд, конечно, отображает тригонометрический ортогональный определитель. Матожидание недоказуемо.  Комплексное число, следовательно, концентрирует невероятный определитель системы линейных уравнений. Умножение вектора на число изящно определяет математический анализ. '}
      />

      <ReportContentCell
        label={'Описание отчетного периода: основные проблемы, с которыми столкнулись сотрудники приемной при работе в отчетный период (взаимодействие с населением, руководством города/предприятия, бытовые)'}
        content={'Умножение вектора на число изящно определяет математический анализ. Критерий сходимости Коши, следовательно, расточительно отображает Наибольший Общий Делитель (НОД). Разрыв функции изящно изменяет стремящийся функциональный анализ.'}
      />

      <div className="br"/>

      <h2 className="h2">
        Отчет о территории
      </h2>

      <ReportContentCell
        label={'Описание основных проблемных тем в городе и на предпиятии за отчетный период'}
        content={'Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать.'}
      />

      <ReportContentCell
        label={'Ожидаемые отрицательные события в следующем за отчетным периодом месяце'}
        content={'Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать.'}
      />

      <ReportContentCell
        label={'Какие проблемы били решены в городе и на предпиятии за отчетный период'}
        content={'Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать.'}
      />
      <ReportContentCell
        label={'Конфликты, недовольство, возмущения граждан. Ключевые решения.'}
        content={'Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать.'}
      />

      <h2 className="h2">
        Ссылки на СМИ о мероприятиях
      </h2>

    </div>
  </React.Fragment>
);

export default MonthReportItemContent;
