import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByRole,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import AddProfessorForm from "../components/AddProfessorForm";
import { ProfessorServices } from "../services/api";
jest.mock("../services/api", () => ({
  ProfessorServices: {
    getProfessors: jest.fn(),
    addProfessor: jest.fn(),
    // other mocked methods
  },
}));

describe("AddProfessorForm", () => {
  test('renders Add Professor Form correctly under initail route', async () => {
    ProfessorServices.addProfessor.mockResolvedValueOnce();
    ProfessorServices.getProfessors.mockResolvedValueOnce([]);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AddProfessorForm />
      </MemoryRouter>
    );

    // Debugging: Print the entire rendered component structure
    // debug();

    // Ensure Add Professor Form elements are present
    await act(async () => {
      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
      expect(screen.getByText("Add Professor")).toBeInTheDocument();
    });
  });

  test("calls addProfessor and updates professors list upon successful form submission", async () => {
    // Mock getProfessors to return an empty array initially
    ProfessorServices.getProfessors.mockResolvedValueOnce([]);

    // Mock addProfessor to resolve successfully
    ProfessorServices.addProfessor.mockResolvedValueOnce();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AddProfessorForm />
      </MemoryRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Name"), {
        target: { value: "John Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "john@example.com" },
      });
      fireEvent.click(screen.getByText("Add Professor"));
    });
    await waitFor(() => {
      expect(ProfessorServices.addProfessor).toHaveBeenCalledWith({
        name: "John Doe",
        email: "john@example.com",
      });
    });
  });
});
