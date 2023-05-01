import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";
import { Card } from "./Components/Card";
import { AboutUs } from "./Pages/AboutUs";
import { describe, it, vi } from "vitest";
import { Form } from "./Components/Form";
import { CardForm } from "./Components/CardForm";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const initialState = {
  form: {
    characters: [],
  },
};
const store = mockStore(initialState);

describe("About test", () => {
  test("render About component", () => {
    render(<AboutUs />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
describe("App", () => {
  it("renders App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});

describe("Card", () => {
  it("renders Card component", () => {
    render(
      <Card
        artist_title={""}
        title={""}
        date_display={""}
        id={0}
        image_id={""}
        isActive={false}
      />
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});

describe("CardForm", () => {
  it("renders CardForm component", () => {
    render(
      <CardForm country={""} name={""} birthday={""} gender={""} file={""} />
    );
    expect(screen.getByTestId("cardForm")).toBeInTheDocument();
  });
});

describe("Add Card tests:", () => {
  it("Render Form component", () => {
    const form = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(form).toBeTruthy();
  });

  it("should contain name element", () => {
    const form = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(form.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
  });

  it("should have a disabled submit button at initialization", () => {
    const form = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(form.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("confirm input to form", async () => {
    const form = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const name = form.getByRole("textbox", {
      name: "Name",
    }) as HTMLInputElement;
    const birthday = form.getByLabelText("Birthday") as HTMLInputElement;
    const country = form.getByRole("spinbutton", {
      name: "Country",
    }) as HTMLInputElement;
    const sex = form.getByLabelText(/Gender/) as HTMLSelectElement;
    const image = form.getByLabelText(/Choose image/) as HTMLInputElement;
    const agree = form.getByRole("checkbox") as HTMLInputElement;

    window.URL.createObjectURL = vi.fn();
    const file = window.URL.createObjectURL;

    Object.defineProperty(file, "type", {
      value: "image/png",
      writable: false,
    });

    await act(async () => {
      fireEvent.change(name, { target: { value: "Vasy" } });
      fireEvent.change(birthday, { target: { value: "2022-03-01" } });
      fireEvent.change(sex, { target: { value: "1" } });
      fireEvent.change(country, { target: { value: "USA" } });
      fireEvent.change(agree, { target: { value: true } });
      fireEvent.change(image, { target: { files: [file] } });
    });

    const month = datediff(new Date("2022-12-01"));

    expect(name).toBeTruthy();
    expect(name.value).toBe("Vasy");

    expect(birthday).toBeTruthy();
    expect(month).toBe(4);
    expect(sex).toBeTruthy();
    expect(sex.value).toBe("1");
    expect(image.files![0]).toStrictEqual(file);

    const submit = screen.getByRole("button", { name: "Submit" });
    expect(submit).toBeTruthy();

    submit.click();
    expect(form).toBeTruthy();
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function datediff(_arg0: Date) {
    throw new Error("Function not implemented.");
  }
});
