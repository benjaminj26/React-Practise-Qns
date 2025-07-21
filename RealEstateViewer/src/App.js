// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import AddProperty from './AddProperty';
// import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<PropertyList/>}  exact/>
          <Route path="/property/:propertyID" element={<PropertyDetail/>} />
          <Route path="/property/add" element={<AddProperty/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
