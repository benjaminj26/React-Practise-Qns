import React, { useEffect, useState } from 'react';
import PropertyDetails from './PropertyDetails';

const PropertyList = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Property 1', location: 'Location 1', price: 100000 },
    { id: 2, name: 'Property 2', location: 'Location 2', price: 150000 },
    { id: 3, name: 'Property 3', location: 'Location 3', price: 200000 }
  ]);

  // useEffect(() => {}, [properties]);

  const handleAddProperty = (e) => {
    //    add new porperty logic
    e.preventDefault();

    setProperties([...properties, {
      id: properties.length + 1,
      name: `Property ${properties.length + 1}`,
      location: `Location ${properties.length + 1}`,
      price: 30000
    }]);
  };

  const handleRemoveProperty = (id) => {
    // remove property

    // const index = properties.findIndex(property => property.id === id);

    // console.log(properties);
    setProperties(properties.filter(property => property.id !== id));
  };

  return (
    <div>
      <h1>Property List</h1>
      {/* add property button and list down the properties */}
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <PropertyDetails property={property} onRemove={handleRemoveProperty}></PropertyDetails>
          </li>
        ))}
      </ul>

      <button onClick={handleAddProperty}>Add Property</button>
    </div>
  );
};

export default PropertyList;
