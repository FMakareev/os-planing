import * as React from 'react';
import classNames from 'classnames';

export enum PreloaderSizeEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
}

export enum PreloaderThemeEnum {
  light = 'light',
  dark = 'dark',
  blue = 'blue',
}

export enum PreloaderPositionEnum {
  center = 'center',
}

interface IPreloaderProps {
  size?: PreloaderSizeEnum,
  theme?: PreloaderThemeEnum,
  position?: PreloaderPositionEnum,
  style?: object,
}


export const Preloader: React.FC<IPreloaderProps> = ({size, theme, position, style}) => (
  <div style={style} className={classNames("preloader", {
    'preloader--xs': PreloaderSizeEnum.xs === size,
    'preloader--sm': PreloaderSizeEnum.sm === size,
    'preloader--md': PreloaderSizeEnum.md === size,
    'preloader--dark': PreloaderThemeEnum.dark === theme,
    'preloader--light': PreloaderThemeEnum.light === theme,
    'preloader--blue': PreloaderThemeEnum.blue === theme,
    'preloader--position-center ': PreloaderPositionEnum.center === position,
  })}>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>);

Preloader.defaultProps = {
  size: PreloaderSizeEnum.sm,
  theme: PreloaderThemeEnum.blue,
}


export default Preloader;
