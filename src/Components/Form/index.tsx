import React from "react";
import { Button } from "../Button";
import { IErrors, IFormState, IData, FormProps } from "./types";
import "./form.scss";

class Form extends React.Component<FormProps, IFormState> {
  formRef: React.RefObject<HTMLFormElement>;
  nameInput: React.RefObject<HTMLInputElement>;
  birthdayInput: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  genderInputM: React.RefObject<HTMLInputElement>;
  genderInputF: React.RefObject<HTMLInputElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
    this.nameInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.countryInput = React.createRef();
    this.genderInputM = React.createRef();
    this.genderInputF = React.createRef();
    this.agreeInput = React.createRef();
    this.fileInput = React.createRef();

    this.state = {
      message: "",
      errors: {
        nameError: "",
        dateError: "",
        countryError: "",
        sexError: "",
        agreeError: "",
        fileError: "",
      },
    };
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (this.validation()) {
      const data: IData = {};
      if (this.nameInput.current) {
        data.name = this.nameInput.current.value;
      }
      if (this.birthdayInput.current) {
        data.birthday = this.birthdayInput.current.value;
      }
      if (this.countryInput.current) {
        data.country = this.countryInput.current.value;
      }
      if (this.genderInputM.current) {
        data.gender = this.genderInputM.current.checked ? "male" : "female";
      }
      if (this.fileInput.current?.files) {
        data.file = URL.createObjectURL(this.fileInput.current.files[0]);
      }
      this.setState({ message: "Information has been saved" });
      this.addCard(data);
      setTimeout(() => {
        this.setState({ message: "" });
      }, 2000);

      this.resetForm();
    }
  }
  validation() {
    let isValid = true;
    const errors: IErrors = {
      nameError: "",
      dateError: "",
      countryError: "",
      sexError: "",
      agreeError: "",
      fileError: "",
    };

    if (
      !this.nameInput.current?.value ||
      !/^[a-zA-Zа-яА-Я]+$/.test(this.nameInput.current.value)
    ) {
      isValid = false;
      errors.nameError = "The name should contain 1 or more letters";
    }
    if (!this.birthdayInput.current?.value) {
      isValid = false;
      errors.dateError = "Choose date";
    } else if (new Date(this.birthdayInput.current?.value) > new Date()) {
      isValid = false;
      errors.dateError = "Date of Birth cannot be more than today's date";
    }
    if (!this.countryInput.current?.value) {
      isValid = false;
      errors.countryError = "Enter country";
    }
    if (
      !this.genderInputM.current?.checked &&
      !this.genderInputF.current?.checked
    ) {
      isValid = false;
      errors.sexError = "Choose your gender";
    }
    if (!this.fileInput.current?.value) {
      isValid = false;
      errors.fileError = "Choosse a file";
    }
    if (!this.agreeInput.current?.checked) {
      isValid = false;
      errors.agreeError = "You need to agree";
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  }

  addCard(card: IData) {
    this.props.createCardList(card);
  }

  resetForm() {
    this.formRef.current?.reset();
  }

  render() {
    return (
      <>
        <form
          className="form-wrapper"
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <div className="input-wrapper">
            <label className="form-line">
              Name:
              <input
                type="input"
                placeholder="Enter your name..."
                className="input"
                ref={this.nameInput}
              />
            </label>
            {this.state.errors.nameError ? (
              <p className="error">{this.state.errors.nameError}</p>
            ) : (
              <br />
            )}
          </div>
          <div className="input-wrapper">
            <label className="form-line">
              Birthday:
              <input type="date" className="input" ref={this.birthdayInput} />
            </label>
            {this.state.errors.dateError ? (
              <p className="error">{this.state.errors.dateError}</p>
            ) : (
              <br />
            )}
          </div>
          <div className="input-wrapper">
            <label className="form-line">
              Country:
              <select className="input" ref={this.countryInput}>
                <option value=""> </option>
                <option value="Belarus"> Belarus </option>
                <option value="USA"> USA </option>
                <option value="Poland"> Poland </option>
                <option value="Germany"> Germany </option>
              </select>
            </label>
            {this.state.errors.countryError ? (
              <p className="error">{this.state.errors.countryError}</p>
            ) : (
              <br />
            )}
          </div>
          <div className="input-wrapper">
            <label className="form-line">
              Male
              <input
                type="radio"
                name="gender"
                ref={this.genderInputM}
                value="male"
              />
            </label>
            <label className="form-line">
              Female
              <input
                type="radio"
                name="gender"
                ref={this.genderInputF}
                value="female"
              />
            </label>
            {this.state.errors.sexError ? (
              <p className="error">{this.state.errors.sexError}</p>
            ) : (
              <br />
            )}
          </div>
          <div className="input-wrapper">
            <label className="form-line">
              Choose image:
              <input
                type="file"
                name="img"
                accept="image/*"
                ref={this.fileInput}
              />
            </label>
            {this.state.errors.fileError ? (
              <p className="error">{this.state.errors.fileError}</p>
            ) : (
              <br />
            )}
          </div>
          <div className="input-wrapper">
            <label className="form-line">
              I agree:
              <input type="checkbox" ref={this.agreeInput} />
            </label>
            {this.state.errors.agreeError ? (
              <p className="error">{this.state.errors.agreeError}</p>
            ) : (
              <br />
            )}
          </div>
          <Button>Submit</Button>
          {this.state.message ? (
            <p className="form-message">{this.state.message}</p>
          ) : (
            <br />
          )}
        </form>
        <div></div>
      </>
    );
  }
}

export { Form };
