import { Route, Routes } from 'react-router';
import './App.scss';
import MainView from './MainView';
import Header from './components/Header';
import Nav from './components/Nav';
import SurahDetails from './components/SurahDetails';

function App() {
  return (
    <div className="app">
      <Nav />
      <Header/>
      <Routes>
        <Route path='/' element={<MainView/>} />
        <Route path='/:surahId' element={<SurahDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
