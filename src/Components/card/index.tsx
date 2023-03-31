import { IData } from "../../Data/data";
import "./card.scss";

export function Card(props: IData): JSX.Element {
  return (
    <div className="card-wrapper" data-testid="card">
      <img src={`images/${props.imageNum}.jpg`} alt={props.name} />
      <h3>
        Author: <i>{props.author}</i>
      </h3>
      <h3>
        Name: <i>{props.name}</i>
      </h3>
      <h3>
        Year: <i>{props.year}</i>
      </h3>
    </div>
  );
}
