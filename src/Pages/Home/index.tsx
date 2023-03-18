import './home.scss';
import React from 'react';
import { Search } from '../../Components/search';
import { Card } from '../../Components/card/Сard';
import { data } from '../../Data/data';
import { IData } from '../../Data/data';

type IProps = {};
class Home extends React.Component<IProps, IData[]> {
  constructor(props: IProps) {
    super(props);
    this.state = [{
      author: '',
      name: '',
      year: '',
      imageNum: 0,
   }]
  }

  render() {
    return(
    <div className='cards-page'>
    <Search></Search>
   <div className='cards-wrapper'>
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
            ></Card>
          ))
        )}
        </div> 
    </div>
    )
  };
};

export { Home };