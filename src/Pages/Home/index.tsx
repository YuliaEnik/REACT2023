import "./home.scss";
import React from "react";
import { Search } from "../../Components/search";
import { Card } from "../../Components/card";
import { data, IData } from "../../Data/data";

class Home extends React.Component<unknown, IData[]> {
  constructor(props: unknown) {
    super(props);
    this.state = [
      {
        author: "",
        name: "",
        year: "",
        imageNum: 0,
      },
    ];
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
              <Card
                imageNum={cardData.imageNum}
                author={cardData.author}
                name={cardData.name}
                year={cardData.year}
                key={cardData.imageNum}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export { Home };
