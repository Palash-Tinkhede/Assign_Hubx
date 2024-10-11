import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
          
          <Route path="calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
