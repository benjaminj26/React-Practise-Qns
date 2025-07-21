// AddProfessorForm.js
import React, { useEffect, useState } from "react";
import { ProfessorServices } from "../services/api";
import ProfessorDetails from "./ProfessorDetails";
import "../App.css";
import useProfessors from "../hooks/useProfessors";

function AddProfessorForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [professors, setProfessors] = useState([]);

    const [addProfessor, getProfessors] = useProfessors();

    const fetchProfessors = () => {
        // fetch profeesors from json server
        ProfessorServices.getProfessors()
            .then(data => {
                console.log('Fetched Data', data.data);
                setProfessors(data);
            })
            .catch(err => {
                console.log(err);
                setProfessors([]);
            });
    };

    //   use react hook to load professors 
    useEffect(() => {
        fetchProfessors();
    }, []);

    const validateForm = () => {
        // form validation 
        if (name === '') {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
        } else if (email === '') {
            setErrors({
                ...errors,
                email: 'Email is required'
            });
        }

        return Object.keys(errors).length;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate form and post data to json server
        console.log('Name:', name, 'Email', email);

        if (validateForm() === 0) {
            ProfessorServices.addProfessor({ name, email })
                .then(data => {
                    fetchProfessors();
                    console.log('Professor added:', data)
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            {/* professor form to add professor  */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name<input onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>
                    Email<input onChange={(e) => setEmail(e.target.value)}></input>
                </label>

                <button type="submit">Add Professor</button>
            </form>
            <hr />
            {/* loop through professor and load professor detail component */}
            {professors.map(professor => <ProfessorDetails professor={professor}></ProfessorDetails>)}
        </div>
    );
}

export default AddProfessorForm;
