import React, { SyntheticEvent } from "react";
import { Button } from "../Button";
import "./form.scss";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

class Form extends React.Component<Props> {
  nameInput: React.RefObject<HTMLInputElement>;
  birthdayInput: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  genderInput: React.RefObject<HTMLInputElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.nameInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.countryInput = React.createRef();
    this.genderInput = React.createRef();
    this.agreeInput = React.createRef();
    this.fileInput = React.createRef();

    /* this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); */
  }

  render() {
    return (
      <form className="form-wrapper">
        <label className="form-line">
          Name:
          <input type="input" className="input" />
        </label>
        <label className="form-line">
          Birthday:
          <input type="date" className="input" />
        </label>
        <label className="form-line">
          Country:
          <select className="input">
            <option value=""> </option>
            <option value="Belarus"> Belarus </option>
            <option value="USA"> USA </option>
            <option value="Poland"> Poland </option>
            <option value="Germany"> Germany </option>
          </select>
        </label>
        <label className="form-line">
          Choose file:
          <input type="file" />
        </label>
        <label className="form-line">
          I agree:
          <input type="checkbox" />
        </label>
        <Button>Submit</Button>
      </form>
    );
  }
}

export { Form };
