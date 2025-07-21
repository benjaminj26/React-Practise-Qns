import React, { useState,useEffect } from 'react';
import PropertyService from './PropertyService';
import './App.css'; 

const AddProperty = () => {
  const [property, setProperty] = useState({
    propertyID: '',
    type: '',
    location: '',
    price: '',
    rooms: '',
    size: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    //   fetch data to display the data by id if it matches 
    };

    fetchData();
  }, [property]);

  const handleChange = (e) => {
    // update property on change
  };

  const handleSubmit = async (e) => {
    // use product services 
    // Add new property
    }

  return (
    <div className="add-property-container"> {/* Add class name */}
      <h2>Add New Property</h2>
      {/* display error messages */}
      {/* create Add Property form */}
     
    </div>
  );
};

export default AddProperty;
