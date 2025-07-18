// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientForm from './PatientForm';
import WelcomePage from './WelcomePage';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"  element={<PatientForm/>} />
          <Route path="/welcome" element={<WelcomePage/>} />
          <Route path="/error" element={<ErrorPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
