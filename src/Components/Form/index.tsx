import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button";
import { IErrors, IFormState, IData, FormProps } from "./types";
import "./form.scss";

function Form({ createCardList }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<IData> = (data) => {
    console.log(data);
    const cardData: IData = {
      ...data,
      //id: uuidv4(),
      file: URL.createObjectURL(data.file[0]),
      agree: "agree",
    };
    addCard(cardData);
    reset();
  };
  /* handleSubmit(e: React.FormEvent) {
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
  } */

  const addCard = (card: IData) => {
    createCardList(card);
  };

  return (
    <>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label className="form-line">
            Name:
            <input
              type="input"
              placeholder="Enter your name..."
              className="input"
              autoComplete="off"
              {...register("name", {
                required: 'The name should contain 1 or more letters"',
              })}
            />
          </label>
          {errors.name ? (
            <p className="error">{errors.name.message}</p>
          ) : (
            <br />
          )}
        </div>
        <div className="input-wrapper">
          <label className="form-line">
            Birthday:
            <input
              type="date"
              className="input"
              {...register("date", {
                required: "Choose date",
              })}
            />
          </label>
          {errors.date ? (
            <p className="error">{errors.date.message}</p>
          ) : (
            <br />
          )}
        </div>
        <div className="input-wrapper">
          <label className="form-line">
            Country:
            <select
              className="input"
              {...register("country", { required: "Enter country" })}
            >
              <option value=""> </option>
              <option value="Belarus"> Belarus </option>
              <option value="USA"> USA </option>
              <option value="Poland"> Poland </option>
              <option value="Germany"> Germany </option>
            </select>
          </label>
          {errors.country ? (
            <p className="error">{errors.country.message}</p>
          ) : (
            <br />
          )}
        </div>
        <div className="input-wrapper">
          <label className="form-line">
            Male
            <input
              type="radio"
              {...register("gender", {
                required: "Choose your gender",
              })}
              value="male"
            />
          </label>
          <label className="form-line">
            Female
            <input
              type="radio"
              {...register("gender", {
                required: "Choose your gender",
              })}
              value="female"
            />
          </label>
          {errors.gender ? (
            <p className="error">{errors.gender.message}</p>
          ) : (
            <br />
          )}
        </div>
        <div className="input-wrapper">
          <label className="form-line">
            Choose image:
            <input
              type="file"
              accept="image/*"
              {...register("file", { required: "Choosse a file" })}
            />
          </label>
          {errors.file ? (
            <p className="error">{errors.file.message}</p>
          ) : (
            <br />
          )}
        </div>
        <div className="input-wrapper">
          <label className="form-line">
            I agree:
            <input
              type="checkbox"
              {...register("agree", {
                required: "You need to agree",
              })}
            />
          </label>
          {errors.agree ? (
            <p className="error">{errors.agree.message}</p>
          ) : (
            <br />
          )}
        </div>
        <Button>Submit</Button>
        {message ? <p className="form-message">{message}</p> : <br />}
      </form>
      <div></div>
    </>
  );
}

export { Form };
