import { IData } from "../../Data/data";
import "./card.scss";

export function Card(props: IData): JSX.Element {
  return (
    <li className="card-wrapper" data-testid="card">
      <img
        src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`}
        alt={props.title}
      />
      <h3>
        Author: <i>{props.artist_title}</i>
      </h3>
      <h3>
        Name: <i>{props.title}</i>
      </h3>
      <h3>
        Year: <i>{props.date_display}</i>
      </h3>
    </li>
  );
}
