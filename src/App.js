import { Route, Routes } from 'react-router';
import './App.scss';
import MainView from './MainView';
import Header from './components/Header';
import Nav from './components/Nav';
import SurahDetails from './components/SurahDetails';
import RecitersDetails from './components/RecitersDetails';
import ReciterSurahDetails from './components/ReciterSurahDetails';

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/:surahId' element={<SurahDetails />} />
        <Route path='/reciterDetails/:reciterId' element={<RecitersDetails />} />
        <Route path='/surah/:reciterId/:surahDetailId' element={<ReciterSurahDetails />} />
      </Routes>
    </div>
  );
}

export default App;
