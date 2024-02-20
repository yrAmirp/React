import cn from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeSwitcherIcon from 'shared/assets/theme-switcher.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

  const {theme, toggleTheme} = useTheme();

  return (
    <Button theme={ThemeButton.TEXT} className={cn(cls.ThemeSwitcher, {}, [])} onClick={toggleTheme}>
      <ThemeSwitcherIcon fill={theme === Theme.LIGHT ? 'yellow' : 'blue'}/>
    </Button>
  );
};