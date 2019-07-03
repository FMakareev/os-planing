import * as React from 'react';

interface ICookiePolicyProps {
  [prop: string]: any
}

const CookiePolicy: React.FC<ICookiePolicyProps> = () => {
  return (
    <div className="cookies">
      <div className="cookies__text">
        Мы используем файлы cookies для корректной работы сайта. Оставаясь на этом сайте, вы
        соглашаетесь с
        <a href="javascript:void(0);">условиями использования файлов cookies</a>
      </div>
      <a className="button-border cookies__button js-cookies" href="javascript:void(0);">
        Понятно
      </a>
    </div>
  );
};

export default CookiePolicy;