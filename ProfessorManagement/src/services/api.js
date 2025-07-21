import axios from "axios";
import environment from "../environments/environment.ts"
// const apiUrl = environment.apiUrl;
const apiUrl = "http://localhost:3000/professors";

export const ProfessorServices = {
  getProfessors: async () => {
    // get professors from json server
    console.log('API Url', apiUrl);
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  },

  addProfessor: async (professorData) => {
    // post data to db.json
    const response = await axios.post(`${apiUrl}`, professorData);
    return response.data;
  },
};