import React, { useState, useEffect, useCallback } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import PropertyMarker from "./PropertyMarker";
export const App = ({ google }) => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 31.5497, lng: 74.3436 });
  const [isMounted, setIsMounted] = useState(true);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);



  const handleMapReady = (mapProps, map) => {
    // set Map and map center
  };

  const handleSearch = () => {
    // check google object is instanciate properly and call google map places services to search for locations and set search result

  };

  const handleAddLocation = (result) => {
    // Add new location by parsing result opbject as result object has name and geometry.location to add Marker and update the properties state so that
    // record of previous properties are maintained as well . Same for marker create google marker and maintain th marker state and clear the search result



  };

  const handleRemoveLocation = useCallback(
    // update the properties by slicing the properties object and remove the properties and call remove marker function as well 

    [properties]
  );

  const removeMarker = useCallback(
    // update the markers by slicing the markers object of state and remove the properties and call remove marker function as well 

    index => {
      // Ensure index is within bounds

      // Create a copy of the markers array
      // Remove the marker at the specified index
      // Set the map of the removed marker to null to remove it from the map
      // Update the state with the modified markers array

    },
    [markers]
  );

  const handleMapClick = (mapProps, map, clickEvent) => {
    // Reverse geocode the clicked location to get its name
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        location: {
          lat: clickEvent.latLng.lat(),
          lng: clickEvent.latLng.lng(),
        },
      },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            // create ne location by getting formatted_address from result and lat, long from click events
            // setProperties with new locations 
            // create new Marker for google.maps.Marker pass it position and map
            //  update the makers array of state so that it maintian preivous markers as ewll 

          } else {
            console.log("Geocoder failed due to: " + status);
          }
        }
      }
    );
  };

  useEffect(() => {
    if (properties.length > 0 && isMounted) {
      // console.log(p);
      // set map center after loading and properties

    }
  }, [properties]);

  return (
    <div style={{ display: "flex" }}>
      {/* add html for search box and its button and call handleSearch method list down properties with remove button */}
      {/* Load Map and loop through perperties to list down with remove button having LocationMarker based on them  */}
      <div style={{ flex: "1 1 50%", position: "relative", height: "500px" }}>
        <label htmlFor="location">Enter location</label>
        <input id="location" placeholder="Enter location"></input>
        {/* <button onClick={() => {}}>search</button> */}
        <button>Search</button>
        <div>loading</div>

      </div>
    </div>
  );
};

// export default App;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDh0LyUchQyqlcsHgYRO5w7iUV4ttlNdDI",
})(App);
