import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
const LoanForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    loanAmount: "",
    purpose: "House",
    tenure: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Validations rules: if valid than navigate to welcome page otherwies 
    // navigate to error page
    if (formData.fullName === '') validationErrors.fullName = "Please enter your full name";
    if (parseInt(formData.loanAmount) < 1000 || parseInt(formData.loanAmount) > 1000000) validationErrors.loanAmount = "loan amount must be between 1000 and 1000000";
    if (parseInt(formData.tenure) < 1 || parseInt(formData.tenure) > 30) validationErrors.tenure = "Tenure must be between 1 and 30 years";

    setErrors(validationErrors);

    if (Object.keys(errors).length === 0) {
      navigate('/welcome');
    } else {
      // navigate('/error');
    }
  };

  return (
    <div>
    <h1 className="header">Bank Loan Form</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">full name</label>
      <input placeholder="full name" id="fullName" name="fullName" onChange={handleChange}/>
      <div>{errors.fullName}</div>

      <label htmlFor="loanAmount">loan amount</label>
      <input placeholder="loan amount" id="loanAmount" name="loanAmount" onChange={handleChange}/>
      <div>{errors.loanAmount}</div>

      <label htmlFor="tenure">tenure</label>
      <input placeholder="tenure" id="tenure" name="tenure" onChange={handleChange}/>
      <div>{errors.tenure}</div>

      <button type="submit">submit</button>
    </form>
    </div>
  );
};

export default LoanForm;
