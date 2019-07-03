import * as React from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames';

export interface IFooterProps {
  className?: string;
}

export const Footer: React.FC<IFooterProps> = ({className}) => (<footer
  className={classNames("pers", className)}
>
  <Link to={'/privacy'}>
    Условия обработки персональных данных
  </Link>
</footer>);

export default Footer;
