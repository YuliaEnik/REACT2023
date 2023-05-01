import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button";
import { IData, IDataForm } from "./types";
import { setCharacters, succcess } from "../../Store/reducers/formPageReducer";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import "./style.scss";
const savedMessage = "Information is saved";

export function Form() {
  const dispatch = useAppDispatch();
  const { isSucccess } = useAppSelector((state) => state.form);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDataForm>({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const createCharacter = (character: IData) => {
    dispatch(setCharacters(character));
    setTimeout(() => {
      dispatch(succcess());
    }, 2000);
    reset();
  };

  const onSubmit: SubmitHandler<IDataForm> = (data) => {
    const cardData = {
      ...data,
      file: URL.createObjectURL(data.file[0]),
      agree: "agree",
    };
    if (cardData) {
      createCharacter(cardData);
    }
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
                required: "The name should contain 1 or more letters",
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
        {isSucccess ? <p className="form-message">{savedMessage}</p> : <br />}
      </form>
    </>
  );
}
