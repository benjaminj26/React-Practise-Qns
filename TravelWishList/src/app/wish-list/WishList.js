import React, { useState, useEffect } from 'react';
import '../../App.css';

const WishList = ({ initialLocations }) => {
  const [locations, setLocations] = useState(initialLocations);
  // const [newLocation, setNewLocation] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const updatedLocations = ["Paris", "London", "New York"];
    console.log('Previous Wish List:', initialLocations);
  }, [locations]);

  const addLocation = (newLocation) => {
    // check if location is not empty and does not exists alread
    // add new location to whish list and clear erros 
    if (!locations.some(loc => loc.toLowerCase() === newLocation.toLowerCase())) {
      setLocations([...locations, newLocation]);
    }
  };

  const removeLocation = (locationToRemove) => {
    // remove locations locations
    setLocations(locations.filter(location => location.toLowerCase() !== locationToRemove.toLowerCase()));
  };

  const handleSubmit = (e) => {
    // prevent default submistion and call add location form
    // clear new location state
    const location = e.target.elements.location.value;

    addLocation(location);
    
  };

  return (
    <div className="wish-list-container">

      <h2>Travel Wish List</h2>
      <ul className="location-list">
      {/* list down locations using map  */}
        {locations.map(location => (
          <li>
            <div>{location}</div>
            <button onClick={() => removeLocation(location)}>X</button>
          </li>
        ))}
        
      </ul>
      {/* display locations erros  */}
     {/* create location form and call addLocation method on submission */}
     <form onSubmit={handleSubmit}>
      <input name='location' placeholder='Add new location'></input>


      <button type='submit'>Add</button>
     </form>
    </div>
  );
};

export default WishList;
