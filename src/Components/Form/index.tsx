import React from "react";
import { Button } from "../Button";
//import { CardForm } from "../../Components/Card-form";
import "./form.scss";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
interface IData {
  name: string | null;
  birthday: string | null;
  country: string | null;
  gender: string | boolean | null;
  agree: string | boolean | null;
  file: string | boolean | null;
}
class Form extends React.Component<Props, IData> {
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

    this.state = {
      name: "",
      birthday: "",
      country: "",
      gender: "",
      agree: "",
      file: "",
    };
    /* this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); */
  }

  onChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* this.state = {
      name: this.nameInput.current!.value,
      birthday: this.birthdayInput.current!.value,
      country: this.countryInput.current!.value,
      gender: this.genderInput.current!.value,
      agree: this.agreeInput.current!.value,
      file: this.fileInput.current!.value,
    }; */
  };

  validation = () => {
    //const errors = {};
    let isValid = true;

    if (
      !this.nameInput.current?.value ||
      !/^[a-zA-Zа-яФ-Я]+$/.test(this.nameInput.current.value)
    ) {
      isValid = false;
      //errors.name = "The name should contain only letters";
    }
    if (!this.countryInput.current?.value) {
      isValid = false;
      //errors.country = "Enter country";
    }
    if (!this.agreeInput.current?.checked) {
      isValid = false;
      //errors.agree = "You need to agree";
    }
    this.setState({
      //errors: errors,
    });
    return isValid;
  };

  render() {
    return (
      <>
        <form className="form-wrapper">
          <label className="form-line">
            Name:
            <input
              type="input"
              className="input"
              ref={this.nameInput}
              //valid={this.state.nameInput}
              //onChange={this.onChangeHandler}
            />
          </label>
          <label className="form-line">
            Birthday:
            <input
              type="date"
              className="input"
              //ref={this.Birthday}
              //errorMessage="Choose date"
              // valid={this.state.date}
              //onChange={this.onChangeHandler}
            />
          </label>
          <label className="form-line">
            Country:
            <select
              className="input"
              //ref="country"
              //errorMessage="Choose country"
              //valid={this.state.country}
              //onChange={this.onChangeHandler}
            >
              <option value=""> </option>
              <option value="Belarus"> Belarus </option>
              <option value="USA"> USA </option>
              <option value="Poland"> Poland </option>
              <option value="Germany"> Germany </option>
            </select>
          </label>
          <label className="form-line">
            Male
            <input type="radio" name="male-female" value="male" />
          </label>
          <label className="form-line">
            Female
            <input type="radio" name="male-female" value="female" />
          </label>
          <label className="form-line">
            Choose file:
            <input
              type="file"
              //ref="file"
              //errorMessage="Choose file"
              //valid={this.state.file}
              //onChange={this.onChangeHandler}
            />
          </label>
          <label className="form-line">
            I agree:
            <input
              type="checkbox"
              //ref="agree"
              //errorMessage="should agree "
              //valid={this.state.agree}
              //onChange={this.onChangeHandler}
            />
          </label>
          <Button>Submit</Button>
        </form>
        {/* {data.map((item: IData, index: number) => (
          <CardForm
            key={index}
            name={item.name}
            date={item.date}
            city={item.citty}
            sex={item.sex}
            file={item.file}
          ></CardForm>
        ))} */}
      </>
    );
  }
}

export { Form };
