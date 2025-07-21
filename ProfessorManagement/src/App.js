import React from "react";
import useProfessors from "./hooks/useProfessors";
import AddProfessorForm from "./components/AddProfessorForm";
// import ProfessorDetails from './components/ProfessorDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const professors = useProfessors();

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<AddProfessorForm />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
