import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    medicalHistory: '',
    currentMedications: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form data if form is valid than navigate to welcome page
    console.log('Form Data', formData);

    const response = validate(formData);
    if (Object.keys(response).length === 0) {
      setFormData({
        name: '',
        dob: '',
        medicalHistory: '',
        currentMedications: '',
      });
      navigate('/welcome');
    } else {
      navigate('/error', { state: errors })
    }
  };

  const validate = (data) => {
    const newErrors = {};
    // add validation rules 

    if (data.name === '') newErrors.name = 'Name is required';
    if (data.dob === '') {
      newErrors.dateOfBirth = 'Date of Birth is required';
    } else {
      const date = new Date(data.dob);

      if (date.getTime() > Date.now()) {
        newErrors.dateOfBirth = 'Date of Birth cannot be a future date';
      }
    }
    console.log('Errors:', newErrors);
    setErrors(newErrors);
    return errors;
  };

  return (
    <div className="form-container">
      <h1>Patient Registration</h1>
      {/* Create Patient Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' onChange={handleChange} />
        <div>{errors.name}</div>

        <label htmlFor='dob'>Date of Birth:</label>
        <input id='dob' name='dob' onChange={handleChange} />
        <div>{errors.dateOfBirth}</div>

        <label htmlFor='medicalHistory'>Medical History:</label>
        <input id='medicalHistory' name='medicalHistory' onChange={handleChange} />

        <label htmlFor='currentMedications'>Current Medications:</label>
        <input id='currentMedications' name='currentMedications' onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
