import React from "react";
import { Form } from "../../Components/Form";
import "./forms.scss";

const FormPage: React.FC = () => {
  return (
    <div className="logIn-wrapper">
      <h2 className="title">Welcome. Please make the form.</h2>
      <Form></Form>
    </div>
  );
};

export { FormPage };
