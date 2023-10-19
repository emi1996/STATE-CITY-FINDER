import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Result from './components/Result';


function App() {
  return (
    <Router>
      <div>
        {/* <h1>My React App</h1> */}
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
