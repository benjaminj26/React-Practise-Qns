import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './app/property-list/PropertyList';
import PropertyDetails from './app/property-list/PropertyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertyList />} />
      </Routes>
    </Router>
  );
}

export default App;
