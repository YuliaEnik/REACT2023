import React from "react";
import { CardForm } from "./../CardForm";
import { FormData } from "./../Form/types";
import "./cardList.scss";

class FormCardList extends React.Component<FormData> {
  render() {
    return (
      <div className="card-list-wrapper">
        {this.props.cards.map((card, index) => (
          <CardForm key={index} {...card} />
        ))}
      </div>
    );
  }
}

export { FormCardList };
