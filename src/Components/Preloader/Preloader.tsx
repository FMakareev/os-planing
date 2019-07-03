import * as React from 'react';
import classNames from 'classnames';

export enum PreloaderSizeEnum {
  xs='xs',
  sm='sm',
  md='md',
}

export enum PreloaderThemeEnum {
  light='light',
  dark='dark',
}

interface IPreloaderProps {
  size?: PreloaderSizeEnum,
  theme?: PreloaderThemeEnum,
  style?: object,
}


export const Preloader: React.FC<IPreloaderProps> = ({size,theme, style}) => (<div style={style} className={classNames("preloader",{
  'preloader--xs': PreloaderSizeEnum.xs === size,
  'preloader--sm': PreloaderSizeEnum.sm === size,
  'preloader--md': PreloaderSizeEnum.md === size,
  'preloader--dark': PreloaderThemeEnum.dark === theme,
  'preloader--light': PreloaderThemeEnum.light === theme,
})}>
  <div/>
  <div/>
  <div/>
  <div/>
</div>);

Preloader.defaultProps = {
  size: PreloaderSizeEnum.sm,
  theme: PreloaderThemeEnum.dark,
}


export default Preloader;
