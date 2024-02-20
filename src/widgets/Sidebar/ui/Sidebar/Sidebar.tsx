import cn from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cn(cls.main)}>
        <button onClick={onToggle}>toggle</button>
      </div>
      <div className={cn(cls.switchers)}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
