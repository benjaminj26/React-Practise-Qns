import { useState, useEffect } from 'react';
import { ProfessorServices } from '../services/api';
// import { Pro } from '../services/api';
const useProfessors = () => {
  const addProfessor = ProfessorServices.addProfessor;

  const getProfessors = ProfessorServices.getProfessors;

  return [ addProfessor, getProfessors ];
};


export default useProfessors;
