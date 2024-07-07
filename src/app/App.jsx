// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todolist from '../components/Todolist.jsx'
import Message from '../components/Message'
import One from '../challenges/one.jsx'

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/message" element={<Message />} />
          <Route path="/challenges/one" element={<One />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
