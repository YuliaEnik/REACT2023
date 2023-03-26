import React, { Component } from "react";
import "./card-form.scss";

type IProps = {
  name: string;
  date: string;
  city: string;
  sex: string;
  file: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type IState = {};
class CardForm extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-wrapper">
        <p>
          <i>Name:</i> {this.props.name}
        </p>
        <p>
          <i>Date:</i> {this.props.date}
        </p>
        <p>
          <i>City:</i> {this.props.city}
        </p>
        <p>
          <i>Sex:</i> {this.props.sex}
        </p>
        <p>
          <i>File:</i> {this.props.file}
        </p>
      </div>
    );
  }
}

export { CardForm };
