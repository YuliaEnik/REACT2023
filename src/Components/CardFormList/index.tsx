import React from "react";
import { CardForm } from "./../CardForm";
import { FormData } from "./../Form/types";
import "./cardList.scss";

export type FormCardsProps = { cards: FormData };

function FormCardList({ cards }: FormCardsProps) {
  return (
    <div className="card-list-wrapper">
      {cards.map((card, index) => (
        <CardForm key={index} {...card} />
      ))}
    </div>
  );
}

export { FormCardList };
