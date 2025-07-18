// Weather.test.js
import React from 'react';
import { render, fireEvent, getByDisplayValue, getByRole } from '@testing-library/react';
// import WeatherComponent from './Weather';
import WeatherComponent from '../app/weather/Weather';
// import { temperatureFunction } from '../utils/temperatureFunction';
import { temperatureFunction } from '../app/utils/temperatureFunction';

test('displays temperature in selected format', () => {
  const { getByText, getByDisplayValue } = render(<WeatherComponent />);
  
  const formatDropdown = getByDisplayValue('Celsius');
  // const celsiusOption = getByText('Celsius');

  // Change format to Fahrenheit
  fireEvent.change(formatDropdown, { target: { value: 'Fahrenheit' } });
  expect(getByText('Temperature: 77.00°F')).toBeInTheDocument();
  
  // Change format to Kelvin
  fireEvent.change(formatDropdown, { target: { value: 'Kelvin' } });
  expect(getByText('Temperature: 298.15K')).toBeInTheDocument();
});


test('updates temperature when input is changed', () => {
  const { getByText, getByPlaceholderText } = render(<WeatherComponent />);
  
  const temperatureInput = getByPlaceholderText('Enter new temperature');
  
  // Change temperature to 30°C
  fireEvent.change(temperatureInput, { target: { value: '30' } });
  expect(getByText('Temperature: 30°C')).toBeInTheDocument();
});

test('temperatureFunction correctly converts temperature', () => {
  // Test conversion from Celsius to Fahrenheit
  expect(temperatureFunction(25, 'Fahrenheit')).toBe('77.00°F');

  // Test conversion from Celsius to Kelvin
  expect(temperatureFunction(25, 'Kelvin')).toBe('298.15K');
});