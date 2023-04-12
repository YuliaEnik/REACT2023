import { useState } from "react";
import { Form } from "../../Components/Form";
import { IData, FormData } from "../../Components/Form/types";
import { FormCardList } from "./../../Components/CardFormList";
import "./style.scss";

export function FormPage() {
  const [cards, setCards] = useState<FormData>([]);

  const createCardList = (card: IData) => {
    setCards((cards: FormData) => [...cards, card]);
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
