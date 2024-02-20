import cn from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}


export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cn(cls.logo)}></div>
      <div className={cn(cls.links)}>
        <AppLink to={'/'}> Главная </AppLink>
        <AppLink to={'/about'}> О сайте </AppLink>
      </div>
      <ThemeSwitcher/>
    </div>
  );
};

