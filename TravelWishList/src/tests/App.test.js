import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WishList from '../app/wish-list/WishList';
test('renders initial list of locations correctly', () => {
  const initialLocations = ["Paris", "Tokyo", "New York"];
  const { getByText } = render(<WishList initialLocations={initialLocations} />);
  
  initialLocations.forEach(location => {
    expect(getByText(location)).toBeInTheDocument();
  });
});

test('adds new location to the list', () => {
  const initialLocations = ["Paris", "Tokyo", "New York"];
  const { getByPlaceholderText, getByText } = render(<WishList initialLocations={initialLocations} />);
  const input = getByPlaceholderText('Add new location');
  const addButton = getByText('Add');
  const newLocation = 'London';

  fireEvent.change(input, { target: { value: newLocation } });
  fireEvent.click(addButton);

  expect(getByText(newLocation)).toBeInTheDocument();
});

test('removes location from the list', () => {
  const initialLocations = ["Paris", "Tokyo", "New York"];
  const { getByText, queryAllByText, queryByText } = render(<WishList initialLocations={initialLocations} />);
  const locationToRemove = "Tokyo";
  const removeButtons = queryAllByText('X');

  // Find the remove button corresponding to the location to be removed
  const removeButton = removeButtons.find(button => button.closest('li').textContent.includes(locationToRemove));
  
  fireEvent.click(removeButton);

  expect(queryByText(locationToRemove)).toBeNull();
});

test('does not add duplicate locations', () => {
  const initialLocations = ["Paris", "Tokyo", "New York"];
  const { getByPlaceholderText, getByText, queryByText } = render(<WishList initialLocations={initialLocations} />);
  const input = getByPlaceholderText('Add new location');
  const addButton = getByText('Add');
  const duplicateLocation = 'Paris';

  fireEvent.change(input, { target: { value: duplicateLocation } });
  fireEvent.click(addButton);

  // Expect that the duplicate location is not added to the list
  expect(queryByText(duplicateLocation)).toBeInTheDocument();
});

test('logs message to console on props change', () => {
  const initialLocations = ["Paris", "Tokyo", "New York"];
  const updatedLocations = ["Paris", "London", "New York"];
  const consoleSpy = jest.spyOn(console, 'log');
  
  render(<WishList initialLocations={initialLocations} />);
  
  expect(consoleSpy).toHaveBeenCalledWith('Previous Wish List:', initialLocations),'Current Wish List:', updatedLocations;
  // expect(consoleSpy).toHaveBeenCalledWith();
});

