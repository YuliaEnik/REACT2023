import React, { Component } from "react";
import { IData } from "../../Components/Form/types";
import "./cardForm.scss";

// eslint-disable-next-line @typescript-eslint/ban-types
type IState = {};
class CardForm extends Component<IData, IState> {
  constructor(props: IData) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-form-wrapper" data-testid="cardForm">
        <p>
          <i>Name:</i> {this.props.name}
        </p>
        <p>
          <i>Date:</i> {this.props.birthday}
        </p>
        <p>
          <i>City:</i> {this.props.country}
        </p>
        <p>
          <i>Sex:</i> {this.props.gender}
        </p>
        <p>
          <i>File:</i> {this.props.file}
        </p>
      </div>
    );
  }
}

export { CardForm };
