import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
