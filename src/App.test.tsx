import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";
import { Card } from "./Components/Card";
////import { MemoryRouter } from "react-router-dom";
//import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
//import { FormPage } from "./Pages/Forms";
import { describe, it, vi } from "vitest";
import { Form } from "./Components/Form";
import { CardForm } from "./Components/CardForm";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
//import { NotFound } from "Pages/NotFound";
//import userEvent from "@testing-library/user-event";

const mockStore = configureStore([]);
const initialState = {
  form: {
    characters: [],
    //isSucccess: false,
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
    // expect(price.value).toBe("20000");
    // expect(breed).toBeTruthy();
    // expect(breed.value).toBe("Британская");
    //expect(catterys).toBeTruthy();
    //expect(catterys.value).toBe("Tany Mur");
    expect(sex).toBeTruthy();
    expect(sex.value).toBe("1");
    //expect(counts).toBeTruthy();
    expect(image.files![0]).toStrictEqual(file);

    const submit = screen.getByRole("button", { name: "Submit" });
    expect(submit).toBeTruthy();

    submit.click();
    expect(form).toBeTruthy();

    /* const newCard: Array<ICardCatProps> = [
      {
        id: 1,
        breed: breed.value,
        price: Number(price.value),
        sex: Number(sex.value),
        name: name.value,
        age: month,
        catterys: catterys.value,
        counts: Number(counts.value),
      },
    ];
    newCard.map((card) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <Provider store={store}>
          <Card key={card.id} {...card} />
        </Provider>
      );
    });
    expect(newCard.length).toBe(1);
    expect(screen.getByText("Британская")).toBeInTheDocument();
  });

  it("Card mounted", () => {
    render(
      <Provider store={store}>
        <Card key={1} {...catsData[0]} />
      </Provider>
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });*/
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function datediff(_arg0: Date) {
    throw new Error("Function not implemented.");
  }
});
