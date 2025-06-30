import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Astro from './components/Astro';
import LoshuGrid from './components/LoshuGrid';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Astro />} />
        <Route path='/grid' element={<LoshuGrid />} />
      </Routes>
    </>
  );
};

export default App;
