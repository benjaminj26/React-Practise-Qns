import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PatientForm from '../PatientForm';

describe('PatientForm', () => {
  test('Verify form submission with all valid inputs', async () => {
    
    render(<PatientForm />, { wrapper: MemoryRouter });
    const nameInput = screen.getByLabelText('Name:');
    const dobInput = screen.getByLabelText('Date of Birth:');
    const medicalHistoryInput = screen.getByLabelText('Medical History:');
    const medicationsInput = screen.getByLabelText('Current Medications:');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });
    fireEvent.change(medicalHistoryInput, { target: { Text: 'No significant history.' } });
    fireEvent.change(medicationsInput, { target: { value: 'Aspirin' } });

    fireEvent.click(submitButton);

  });

  test('Verify form submission with empty mandatory fields', async () => {
    render(<PatientForm />, { wrapper: MemoryRouter });
    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Date of Birth is required')).toBeInTheDocument();
    });
  });

  test('Check that the date of birth is not a future date', async () => {
    render(<PatientForm />, { wrapper: MemoryRouter });
    const dobInput = screen.getByLabelText('Date of Birth:');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(dobInput, { target: { value: '2050-01-01' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Date of Birth cannot be a future date')).toBeInTheDocument();
    });
  });

  test('Ensure proper error messages are displayed for both valid and invalid data entries', async () => {
    render(<PatientForm />, { wrapper: MemoryRouter });
    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Date of Birth is required')).toBeInTheDocument();
    });

    const nameInput = screen.getByLabelText('Name:');
    const dobInput = screen.getByLabelText('Date of Birth:');

    fireEvent.change(nameInput, { target: { value: '   ' } });
    fireEvent.change(dobInput, { target: { value: 'invalid-date' } });

    fireEvent.click(submitButton);

    
  });
});
