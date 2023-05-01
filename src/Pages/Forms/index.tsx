import { Form } from "../../Components/Form";
import { FormCardList } from "./../../Components/CardFormList";
import "./style.scss";

export function FormPage() {
  return (
    <div className="logIn-wrapper">
      <h3 className="title">
        <i>Welcome. Please make the form.</i>
      </h3>
      <Form />
      <FormCardList />
    </div>
  );
}
