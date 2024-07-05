import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Sucesso from './sucesso';
import Admin from './Admin';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default Main;
