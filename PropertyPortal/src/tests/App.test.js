// PropertyList.test.js
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropertyList from '../app/property-list/PropertyList';
import PropertyDetails from '../app/property-list/PropertyDetails';
describe('PropertyList component', () => {
  it('renders the list of properties', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PropertyList />
      </MemoryRouter>
    );

    expect(screen.getByText('Property List')).toBeInTheDocument(); // Check if the heading is rendered
    expect(screen.getByText('Add Property')).toBeInTheDocument(); // Check if the "Add Property" button is rendered
  });

  it('adds a new property to the list', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PropertyList />
      </MemoryRouter>
    );

  // Get initial count of list items
  const initialListItems = screen.getAllByRole('listitem').length;

  // Click the add property button
  fireEvent.click(screen.getByText('Add Property'));
  const listItemsAfterAdd = screen.getAllByRole('listitem').length;
  // Assert that list items count has increased by 1 after adding property
  expect(listItemsAfterAdd).toBe(initialListItems + 1);

  // Click the remove property button
  
  });
  it('removes a property from the list', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PropertyList />
      </MemoryRouter>
    );
  
    // Get initial count of list items
    const initialListItems = screen.getAllByRole('listitem').length;
  
    // Wait for the "Remove Property" buttons to become available
    await waitFor(() => {
      screen.getAllByText('Remove Property');
    });
  
    // Click the remove button of the first property
    const removeBtns = screen.getAllByText('Remove Property');
    fireEvent.click(removeBtns[0]);
  
    // Wait for the property to be removed
    // You may not need this step if the removal is instant and there's no async behavior
    // await screen.findByRole('heading', { name: 'Property 3' });
  
    // Get count of list items after removing property
    const listItemsAfterRemove = screen.getAllByRole('listitem').length;
  
    // Assert that list items count has decreased by 1 after removing property
    expect(listItemsAfterRemove).toBe(initialListItems - 1);
  });
});

