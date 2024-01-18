import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';




const App = () => {
 
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}> Главная </Link>
      <Link to={'/about'}> О сайте </Link>
      <button onClick={toggleTheme}>Change Theme!!!</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <button>hello</button>
      <select name="nsns" id="sfd">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

export default App;