import { CardForm } from "./../CardForm";
import { FormData } from "./../Form/types";
import { useAppSelector } from "../../Store/hooks";
import "./style.scss";

export type FormCardsProps = { cards: FormData };

export function FormCardList() {
  const { characters } = useAppSelector((state) => state.formPage);
  return (
    <div className="card-list-wrapper">
      {characters.map((card, index) => (
        <CardForm key={index} {...card} />
      ))}
    </div>
  );
}
