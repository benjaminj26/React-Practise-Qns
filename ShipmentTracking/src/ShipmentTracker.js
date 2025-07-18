// ShipmentTracker.js
import React, { useState } from 'react';
import { getShipmentByTrackingId } from './ShipmentService';

function ShipmentTracker({ setSelectedShipment }) {
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    // get shipment by id other wise disply error 
  };

  return (
    <div className="shipment-tracker-container">
      <h2>Track Shipment</h2>
     {/* create shipment tracking form having shimpment field and search button and display errors if shimpment not fount */}
      
    </div>
  );
}

export default ShipmentTracker;
