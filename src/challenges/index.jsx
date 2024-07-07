// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import One from './one.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/one" element={<One />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
