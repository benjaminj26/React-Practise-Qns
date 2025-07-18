import React, { useState, useEffect } from 'react';

const PropertyDetails = ({ property, onRemove }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a setTimeout

    return () => {

      // Log cleanup message when component unmounts
    };
  }, [property.id]);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      {/*     Simulate loading and display properties */}
      <div>{property.id}</div>
      <div>{property.name}</div>
      <div>{property.location}</div>
      <div>{property.price}</div>

      <button onClick={() => onRemove(property.id)}>Remove Property</button>
    </div>
  );
};

export default PropertyDetails;
