import React from 'react';

// cimport React from 'react';
import '../App.css';

const ProfessorDetails = ({ professor }) => {
//  display professor detials 
    return (
        <>
            <div>{professor.name}</div>
            <div>{professor.email}</div>
            <br></br>
        </>
    );
};

export default ProfessorDetails;
