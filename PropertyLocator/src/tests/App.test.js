import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { App } from '../App';
import { Map } from 'google-maps-react';

const mockGoogleApiWrapper = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

// Mock Google Maps API response
const googleMapsMockResponse = {
  places: [
    { name: 'Place 1', geometry: { location: { lat: 40.7128, lng: -74.006 } } },
    { name: 'Place 2', geometry: { location: { lat: 34.0522, lng: -118.2437 } } }
  ],
  status: 'OK'
};

// Mock Google Maps API
const google = {
  maps: {
    places: {
      PlacesService: jest.fn(() => ({
        textSearch: jest.fn((request, callback) => {
          callback(googleMapsMockResponse.places, googleMapsMockResponse.status);
        })
      })),
    },
    Geocoder: jest.fn(() => ({
      geocode: jest.fn((request, callback) => {
        callback([{ formatted_address: 'Formatted Address' }], 'OK');
      })
    })),
    Size: jest.fn(),
    Point: jest.fn(),
    LatLngBounds: jest.fn(),
    LatLng: jest.fn(),
    Map: jest.fn(),
    event: {
      addListener: jest.fn((object, event, callback) => {
        callback();
      })
    }
  },
};


describe("App", () => {
  it("renders search input and button", () => {
    const WrappedApp = mockGoogleApiWrapper(App);
    render(<WrappedApp />);
    expect(screen.getByLabelText("Enter location")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("displays loading message initially", () => {
    const WrappedApp = mockGoogleApiWrapper(App);
    render(<WrappedApp />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("performs search when search button is clicked", async () => {
    const WrappedApp = mockGoogleApiWrapper(App);
    render(<WrappedApp />);
    fireEvent.change(screen.getByLabelText("Enter location"), { target: { value: "New York" } });
    fireEvent.click(screen.getByRole("button", { name: /Search/i }));
    // Add your assertions related to the search functionality
  });

 

});
