import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";
import { renderWithProviders } from "../../utils/test-utils";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Mock Firebase
jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn(),
  signOut: jest.fn(),
  getAuth: jest.fn(() => ({})),
}));

jest.mock("../../utils/firebase", () => ({
  auth: {},
}));

describe("Header Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Logo correctly", () => {
    // Mock user not logged in
    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback(null);
      return jest.fn(); // unsubscribe
    });

    renderWithProviders(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders user details and sign out button when user is authenticated", async () => {
    // Mock user logged in
    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback({
        uid: "123",
        email: "test@example.com",
        displayName: "John Doe",
        photoURL: "http://example.com/photo.png",
      });
      return jest.fn(); // unsubscribe
    });

    renderWithProviders(<Header />);
    
    await waitFor(() => {
      expect(screen.getByText("(Sign Out)")).toBeInTheDocument();
      expect(screen.getByAltText("user avatar")).toBeInTheDocument();
    });
  });

  it("calls signOut when Sign Out button is clicked", async () => {
    const user = userEvent.setup();
    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback({
        uid: "123",
        email: "test@example.com",
        displayName: "John Doe",
        photoURL: "http://example.com/photo.png",
      });
      return jest.fn(); // unsubscribe
    });

    signOut.mockResolvedValueOnce();

    renderWithProviders(<Header />);
    
    let signOutBtn;
    await waitFor(() => {
      signOutBtn = screen.getByText("(Sign Out)");
    });

    await user.click(signOutBtn);
    expect(signOut).toHaveBeenCalled();
  });
});
