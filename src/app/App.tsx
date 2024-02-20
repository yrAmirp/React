import './styles/index.scss';
import cn from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


const App = () => {
 
  const {theme} = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar/>
      <div className='content-page'>
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;