import { CardForm } from "./../CardForm";
import { FormData } from "./../Form/types";
import "./style.scss";

export type FormCardsProps = { cards: FormData };

export function FormCardList({ cards }: FormCardsProps) {
  return (
    <div className="card-list-wrapper">
      {cards.map((card, index) => (
        <CardForm key={index} {...card} />
      ))}
    </div>
  );
}
