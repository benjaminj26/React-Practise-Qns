// Destination.js
import React, { useEffect } from 'react';

const Destination = ({ id, name, location, onRemove }) => {
  // Simulate data fetching on initialization
  React.useEffect(() => {
    // Simulating fetching data from an API  set default desitination a
    const fetchData = async () => { }


  });

  // Cleanup function to log when component unmounts



  const handleRemove = () => {
    // call OnRemove of Parent
    onRemove(id);
  };

  return (
    <div className="destination-container">
      {/* display desitnation and remove button */}
      <label>Destination 1</label>
      <label>Location: Location 1</label>
      <label>{name}</label>

      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Destination;
