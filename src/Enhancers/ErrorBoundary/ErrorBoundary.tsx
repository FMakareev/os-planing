import React from "react";
import * as Sentry from "@sentry/browser";
import Button from "../../Components/Button/Button";
import {PageTitle} from "../../Components/PageTitle/PageTitle";

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {eventId: null};
  }

  static getDerivedStateFromError(error: any) {
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({eventId});
    });
  }

  render() {
    if (process.env.NODE_ENV === 'production' && this.state.hasError) {
      return (
        <div className={'row center-xs'} style={{
          height: '400px',
          paddingTop: '100px'
        }}>
          <div className={'col-xs-12'}>
            <PageTitle>
              Похоже, у нас проблемы.
            </PageTitle>
            <Button
              onClick={() =>
                Sentry.showReportDialog({
                  eventId: this.state.eventId,
                  lang: 'ru',
                  title: 'Похоже, у нас проблемы.',
                  subtitle: 'Наша команда была уведомлена. ',
                  subtitle2: 'Если вы хотите помочь, расскажите нам, что произошло ниже.',
                  labelName: 'Имя',
                  labelEmail: 'E-mail',
                  labelComments: 'ЧТО СЛУЧИЛОСЬ?',
                  labelClose: 'Закрыть',
                  labelSubmit: 'Отправить',
                  errorFormEntry: 'Некоторые поля были недействительными. Пожалуйста, исправьте ошибки и попробуйте снова.',
                  successMessage: 'Ваш отзыв был отправлен. Спасибо!'
                })
              }
            >
              Сообщить о ошибке
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;