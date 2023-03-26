import React from "react";
import { Form } from "../../Components/Form";
import "./forms.scss";

const FormPage: React.FC = () => {
  return (
    <div className="logIn-wrapper">
      <h3 className="title">
        <i>Welcome. Please make the form.</i>
      </h3>
      <Form></Form>
    </div>
  );
};

export { FormPage };
