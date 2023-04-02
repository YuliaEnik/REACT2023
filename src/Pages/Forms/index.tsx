import { useState } from "react";
import { Form } from "../../Components/Form";
import { IData, FormData } from "../../Components/Form/types";
import { FormCardList } from "./../../Components/CardFormList";
import "./forms.scss";

function FormPage() {
  const [cards, setCard] = useState<FormData | []>([]);

  const createCardList = (card: IData) => {
    setCard((cards: FormData) => [...cards, card]);
  };

  return (
    <div className="logIn-wrapper">
      <h3 className="title">
        <i>Welcome. Please make the form.</i>
      </h3>
      <Form createCardList={(card: IData) => createCardList(card)} />
      <FormCardList cards={cards} />
    </div>
  );
}

export { FormPage };
