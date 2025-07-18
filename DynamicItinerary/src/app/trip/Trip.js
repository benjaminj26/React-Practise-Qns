// Trip.js
import React, { useState } from 'react';
import Destination from '../destination/Destination';
import '../../App.css'
const Trip = () => {
  const [destinations, setDestinations] = useState([]);

  const [destination, setDestination] = useState({});

  const [remove, setRemove] = useState(false);

  // Simulate data fetching on initialization
  React.useEffect(() => {
    // Simulating fetching data from an API  set default desitination a
    const fetchData = async () => {


    };


    // Cleanup function to log when component unmounts

  }, []);

  const handleAddDestination = (e) => {
    // add run time desitination by udating location desitination and id
    e.preventDefault();
    setDestination({...destination, id: destinations.length + 1});
    console.log(destination.location);
    console.log(destination.name);
    setDestinations(([...destinations, destination]));
  };

  const handleRemoveDestination = (id) => {
    //    remove destination logic here
    setRemove(!remove);
    const index = destinations.findIndex(dest => dest.id === id);
    destinations.splice(index, 1);
  };

  const handleChange = (e) => {

    setDestination(({ ...destination, [e.target.name]: e.target.value }));
    console.log('Destination:', destination);
  }

  return (
    <div className="trip-container">
      {/* add desitination to add new desitination dynamically  */}
      <form onSubmit={handleAddDestination}>
        <input name='name' placeholder='name' onChange={handleChange}></input>
        <input name='location' placeholder='location' onChange={handleChange}></input>

        <button type='submit'>Add Destination</button>
      </form>

      {/* list down desitination   */}
      {!remove && <Destination id={"1"} name={"Name 1"} location={"Location 1"} onRemove={handleRemoveDestination}></Destination>}
    </div>
  );
};

export default Trip;
