// App.js
import './App.css';
import MainComponent from './MainComponent';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ConditionalLink from './ConditionalLink';

function App() {
  return (
    <Router>
      <div className='App'>
        {location=useLocation()}
        <Routes>
          <Route path="/main" element={<MainComponent />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
