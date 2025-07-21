import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import PropertyDetail from '../PropertyDetail';
import PropertyService from '../PropertyService';
import PropertyList from '../PropertyList';

jest.mock('../PropertyService');

describe('PropertyDetail component', () => {
  it('renders property details when data is fetched successfully', async () => {
    // Mock data
    const mockProperty = {
      _id: '1',
      type: 'House',
      location: 'New York',
      price: 500000,
      rooms: 3,
      size: 2000
    };

    // Mock PropertyService.getPropertyByID to return mockProperty
    PropertyService.getPropertyByID.mockResolvedValue([mockProperty]);

    // Render PropertyDetail component with mock property ID
    const { getByText } = render(
      <MemoryRouter initialEntries={['/properties/1']}>
        <Routes> {/* Use Routes here */}
          <Route path="/properties/:propertyID" element={<PropertyDetail />} /> {/* Wrap Route inside Routes */}
        </Routes>
      </MemoryRouter>
    );

    // Wait for property details to be rendered
    await waitFor(() => {
      expect(getByText(`Type: ${mockProperty.type}`)).toBeInTheDocument();
      expect(getByText(`Location: ${mockProperty.location}`)).toBeInTheDocument();
      expect(getByText(`Price: ${mockProperty.price}`)).toBeInTheDocument();
      expect(getByText(`Rooms: ${mockProperty.rooms}`)).toBeInTheDocument();
      expect(getByText(`Size: ${mockProperty.size}`)).toBeInTheDocument();
    });
  });

  it('displays error message when data fetching fails', async () => {
    // Mock error message
    const errorMessage = 'Failed to fetch property details';

    // Mock PropertyService.getPropertyByID to throw an error
    PropertyService.getPropertyByID.mockRejectedValue(new Error(errorMessage));

    // Render PropertyDetail component with mock property ID
    const { getByText } = render(
      <MemoryRouter initialEntries={['/properties/1']}>
        <Routes> {/* Use Routes here */}
          <Route path="/properties/:propertyID" element={<PropertyDetail />} /> {/* Wrap Route inside Routes */}
        </Routes>
      </MemoryRouter>
    );

    // Wait for error message to be displayed
    await waitFor(() => {
      expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });
});


jest.mock('../PropertyService');

describe('PropertyList component', () => {
  it('renders list of properties when data is fetched successfully', async () => {
    // Mock data
    const mockProperties = [
      { _id: '1', type: 'House', location: 'New York' },
      { _id: '2', type: 'Apartment', location: 'Los Angeles' }
    ];

    // Mock PropertyService.getAllProperties to return mockProperties
    PropertyService.getAllProperties.mockResolvedValue(mockProperties);

    // Render PropertyList component
    const { getByText } = render(
      <MemoryRouter>
        <PropertyList />
      </MemoryRouter>
    );

    // Wait for properties to be rendered
    await waitFor(() => {
      expect(getByText('Properties List')).toBeInTheDocument();
      // expect(getByText('Add Property')).toBeInTheDocument();
      expect(getByText('New York - House')).toBeInTheDocument();
      expect(getByText('Los Angeles - Apartment')).toBeInTheDocument();
    });
  });

  it('displays error message when data fetching fails', async () => {
    // Mock error message
    const errorMessage = 'Failed to fetch properties';

    // Mock PropertyService.getAllProperties to throw an error
    PropertyService.getAllProperties.mockRejectedValue(new Error(errorMessage));

    // Render PropertyList component
    const { getByText } = render(
      <MemoryRouter>
        <PropertyList />
      </MemoryRouter>
    );

    // Wait for error message to be displayed
    await waitFor(() => {
      expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });
});