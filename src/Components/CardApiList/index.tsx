import { Card } from "../../Components/Card";
import { IData } from "../../Data/data";
import "./style.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CardApiList = ({ props }: any): JSX.Element => {
  const { cards } = props;
  return (
    <ul className="cards-wrapper">
      {!cards ? (
        <div>No Data</div>
      ) : (
        cards.map((card: IData) => <Card {...card} key={card.imageNum} />)
      )}
    </ul>
  );
};
