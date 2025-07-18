// App.js
import React, { useState,useEffect } from 'react';
import ShipmentForm from './ShipmentForm';
import ShipmentTracker from './ShipmentTracker';
import { getAllShipments } from './ShipmentService';

function App() {
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const data = await getAllShipments();
        setShipments(data);
      } catch (error) {
        console.error('Error fetching shipments:', error.message);
      }
    };

    fetchShipments();
  }, []);

  return (
    <div>
      <h1>Shipment Tracking Platform</h1>
      <ShipmentForm />
      <ShipmentTracker setSelectedShipment={setSelectedShipment} shipments={shipments} />
      {selectedShipment && (
        <div>
          <h2>Selected Shipment Details</h2>
          <p>Tracking ID: {selectedShipment.trackingID}</p>
          <p>Sender: {selectedShipment.sender}</p>
          <p>Receiver: {selectedShipment.receiver}</p>
          <p>Origin: {selectedShipment.origin}</p>
          <p>Destination: {selectedShipment.destination}</p>
          <p>Status: {selectedShipment.status}</p>
          <p>Expected Delivery: {selectedShipment.expectedDelivery}</p>
        </div>
      )}
    </div>
  );
}

export default App;
