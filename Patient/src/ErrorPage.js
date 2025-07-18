// ErrorPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
    // disply error messge in h1
    const location = useLocation();
    const errors = location.state;
    return (
        <>
            <p>{errors?.name}</p>
            <p>{errors?.dob}</p>
            <p>{errors?.medicalHistory}</p>
            <p>{errors?.currentMedications}</p>

        </>
    )
};

export default ErrorPage;
