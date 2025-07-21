// PropertyList.js
import React, { useState, useEffect } from 'react';
import PropertyService from './PropertyService';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProperties = async () => {
    // fetch all properties 
    const response = await PropertyService.getAllProperties();
    return response;
  };

  //   use react hooks to load the fetch properties on page load
  useEffect(() => {
    fetchProperties()
      .then(data => {
        setProperties(data);
        setError('');
      })
      .catch(err => {
        setError(`Error: ${err.message}`);
      });
  }, []);

  // display error messages 

  return (
    <div className="property-list-container">
      <h2 className="property-list-header">Properties List</h2>
      <ul className="property-list">
        {/* loop through properties array  */}
        {properties.map(property =>
          <li key={property.id}>
            {property.location} - {property.type}
          </li>)}
      </ul>
      <div>{error}</div>
    </div>
  );
};

export default PropertyList;
