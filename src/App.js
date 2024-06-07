import './App.css';
import { Navbar } from './components/navbar/NavBar';
import { Dashboard } from './components/page/Dashbpard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Second } from './components/page/Second';
import { Third } from './components/page/Third';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='bgcolorclas'>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
        </Routes>
          </div>

      </div>
    </Router>
  );
};

export default App;
