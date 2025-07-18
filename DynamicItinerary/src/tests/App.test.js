import React from "react";
import { render, fireEvent,waitFor } from "@testing-library/react";
import Trip from "../app/trip/Trip";
import Destination from "../app/destination/Destination";

// Mocking the useEffect hook
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

describe("Trip Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  

  // test('displays list of destinations on app initialization', async () => {
  //   const destinations = [
  //     { id: 1, name: 'Destination 1', location: 'Location 1' },
  //     { id: 2, name: 'Destination 2', location: 'Location 2' },
  //   ];
  
  //   const useStateMock = jest.spyOn(React, 'useState');
  //   useStateMock.mockReturnValueOnce([[], jest.fn()]); // Mock useState with initial empty destinations
  
  //   const { getByText } = render(<Trip />);
  
  //   await waitFor(() => {
  //     destinations.forEach(destination => {
       
  //     });
  //   });
  // });

  test("adds a new destination", () => {
    const { getByText, getByRole } = render(<Trip />);
    const addButton = getByRole('button', { name: 'Add Destination' });
    fireEvent.click(addButton);

    expect(getByText("Destination 1")).toBeInTheDocument();
    expect(getByText("Location: Location 1")).toBeInTheDocument();
  });

  test("removes a destination", async () => {
    const { getByText, queryByText,getByRole } = render(<Trip />);
  
    const addButton = getByRole('button', { name: 'Add Destination' });
    fireEvent.click(addButton);
  
    // Use waitFor to wait for the destination to be added
    await waitFor(() => {
      expect(queryByText("Destination 1")).toBeInTheDocument();
      expect(queryByText("Location: Location 1")).toBeInTheDocument();
    });
  
    const removeButton = getByRole('button', { name: 'Remove' });
    fireEvent.click(removeButton);
  
    // Use waitFor again to wait for the removal to take effect
    await waitFor(() => {
      expect(queryByText("Destination 1")).not.toBeInTheDocument();
      expect(queryByText("Location: Location 1")).not.toBeInTheDocument();
    });
  });
  
});



  test("simulates data fetching on initialization", () => {
    const mockUseEffect = jest.spyOn(React, "useEffect");
    render(
      <Destination id={1} name="Test Destination" location="Test Location" />
    );
    expect(mockUseEffect).toHaveBeenCalled();
  });

  

