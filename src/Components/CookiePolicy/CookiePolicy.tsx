import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

interface ICookiePolicyProps {
  [prop: string]: any
}

const CookiePolicy: React.FC<ICookiePolicyProps> = () => {
  let init = localStorage.getItem('cookies-policy');
  const [isOpen, toggleOpen] = React.useState(init !== 'true');


  return (
    <div
      className={classNames('cookies', {
        open: isOpen,
      })}
    >
      <div
        className="cookies__text"
      >
        Мы используем файлы cookies для корректной работы сайта. Оставаясь на этом сайте, вы
        соглашаетесь с  <Link to={'/privacy'}>
          условиями использования файлов cookies
        </Link>
      </div>
      <a
        onClick={() => {
          localStorage.setItem('cookies-policy', 'true');
          toggleOpen(false)
        }}
        className="button-border cookies__button"
        href="javascript:void(0);">
        Понятно
      </a>
    </div>
  );
};

export default CookiePolicy;