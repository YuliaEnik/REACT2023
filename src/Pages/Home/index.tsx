import "./home.scss";
import React from "react";
import { Search } from "../../Components/search";
import { Card } from "../../Components/card";
import { data, IData } from "../../Data/data";

class Home extends React.Component<unknown, IData[]> {
  constructor(props: unknown) {
    super(props);
  }

  render() {
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
}

export { Home };
