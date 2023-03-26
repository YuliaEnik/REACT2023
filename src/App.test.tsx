import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Card } from "./Components/Card";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { describe, it } from "vitest";

describe("App", () => {
  test("it renders", () => {
    render(<AboutUs />);
    render(<Home />);
  });
});

describe("NoFound", () => {
  it("renders NoFound component", () => {
    render(
      <MemoryRouter initialEntries={["/jhhhhh"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId(/notFound/i)).toBeInTheDocument();
  });
});

describe("App", () => {
  it("renders App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});

describe("Card", () => {
  it("renders Card component", () => {
    render(<Card author={""} name={""} year={""} imageNum={0} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
