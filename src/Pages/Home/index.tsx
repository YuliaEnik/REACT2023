import "./home.scss";
import { Search } from "../../Components/search";
import { Card } from "../../Components/Card";
import { data, IData } from "../../Data/data";

export function Home(): JSX.Element {
  return (
    <div className="cards-page">
      <Search />
      <div className="cards-wrapper">
        {!data ? (
          <div>No Data</div>
        ) : (
          data.map((cardData: IData) => (
            <Card {...cardData} key={cardData.imageNum} />
          ))
        )}
      </div>
    </div>
  );
}
