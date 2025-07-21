import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyService from './PropertyService';
import './App.css'; // Import the CSS file

const PropertyDetail = () => {
  const { propertyID } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch property using Property Services 
    PropertyService.getPropertyByID()
      .then(data => {
        console.log('Fetched Data:', data);
        setProperty(data[0]);
        console.log('Fetched Property:', property);
      })
      .catch(err => setError(`Error: ${err.message}`));
  }, [propertyID]);

  //   check for loading and errors while loading 

  return (
    <div className="property-detail-container">
      <h2>Property Details</h2>
      {/* display Property Attributes */}
      <div>Type: {property?.type}</div>
      <div>Location: {property?.location}</div>
      <div>Price: {property?.price}</div>
      <div>Rooms: {property?.rooms}</div>
      <div>Size: {property?.size}</div>
      <div>{error}</div>
    </div>
  );
};

export default PropertyDetail;
