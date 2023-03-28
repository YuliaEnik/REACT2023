import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Card } from "./Components/Card";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { describe, it, vi } from "vitest";
import { Form } from "./Components/Form";
import { CardForm } from "./Components/CardForm";
import { FormCardList } from "Components/CardFormList";

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

describe("Form", () => {
  beforeEach(() => {
    render(<Form createCardList={vi.fn} />);
  });
  it("shows date form mounts properly", () => {
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
  });

  it("shows radio form mounts properly", () => {
    expect(screen.getAllByText(/male/i)[0]).toBeInTheDocument();
  });

  it("shows select form mounts properly", () => {
    expect(screen.getByText(/country/i)).toBeInTheDocument();
  });

  it("has input with placeholder", () => {
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  });
});

const data = [
  {
    id: "1",
    name: "lll",
    birthday: "2023.03.01",
    country: "USA",
  },
];

describe("CardForm", () => {
  it("renders CardForm component", () => {
    render(<CardForm country={""} name={""} birthday={""} gender={""} />);
    expect(screen.getByTestId("cardForm")).toBeInTheDocument();
  });
});
