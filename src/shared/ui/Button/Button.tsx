import cn from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  TEXT = 'text',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {

  const {
    className,
    children,
    theme = ThemeButton.PRIMARY,
    ...otherProps
  } = props

  return (
    <button 
      className={cn(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};