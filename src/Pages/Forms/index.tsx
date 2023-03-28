import React from "react";
import { Form } from "../../Components/Form";
import { Props, IData, FormData } from "../../Components/Form/types";
import { FormCardList } from "./../../Components/CardFormList";
import "./forms.scss";

class FormPage extends React.Component<Props, FormData> {
  constructor(props: Props) {
    super(props);
    this.state = { cards: [] };
  }

  createCardList(card: IData) {
    this.setState((prevState: FormData) => ({
      cards: [...prevState.cards, card],
    }));
  }
  render() {
    return (
      <div className="logIn-wrapper">
        <h3 className="title">
          <i>Welcome. Please make the form.</i>
        </h3>
        <Form
          createCardList={(card: IData) => this.createCardList(card)}
        ></Form>
        <FormCardList cards={this.state.cards}></FormCardList>
      </div>
    );
  }
}

export { FormPage };
