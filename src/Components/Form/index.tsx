import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button";
import { IData, IDataForm, FormProps } from "./types";
import "./style.scss";

export function Form({ createCardList }: FormProps) {
  const [savedMessage, setSavedMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDataForm>({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit: SubmitHandler<IDataForm> = (data) => {
    const cardData: IData = {
      ...data,
      file: URL.createObjectURL(data.file[0]),
      agree: "agree",
    };
    setSavedMessage("Information has been saved");
    setTimeout(() => {
      setSavedMessage("");
    }, 2000);

    addCard(cardData);
    reset();
  };
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
              {...register("birthday", {
                required: "Choose date",
              })}
            />
          </label>
          {errors.birthday ? (
            <p className="error">{errors.birthday.message}</p>
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
        {savedMessage ? <p className="form-message">{savedMessage}</p> : <br />}
      </form>
      <div></div>
    </>
  );
}
