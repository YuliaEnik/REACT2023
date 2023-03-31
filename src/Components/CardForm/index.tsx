import { IData } from "../../Components/Form/types";
import "./cardForm.scss";

export function CardForm(props: IData): JSX.Element {
  return (
    <div className="card-form-wrapper" data-testid="cardForm">
      <img className="img" src={props.file} alt="Image" />
      <p>
        <i>Name:</i> {props.name}
      </p>
      <p>
        <i>Date:</i> {props.birthday}
      </p>
      <p>
        <i>City:</i> {props.country}
      </p>
      <p>
        <i>Sex:</i> {props.gender}
      </p>
    </div>
  );
}
