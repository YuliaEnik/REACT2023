import { render } from '@testing-library/react';
import React from 'react';
import { IData } from '../../Data/data';
import './card.scss';

class Card extends React.Component<IData> {
  // constructor (props:IData) {
  //   super(props);
  // }
  render() {
  return (
    <div className='card-wrapper' data-testid='card'>
      <img src={`images/${this.props.imageNum}.jpg`} alt={this.props.name} />
      <h3>
        Author: <i>{this.props.author}</i>
      </h3>
      <h3>
        Name: <i>{this.props.name}</i>
      </h3>
      <h3>
        Year: <i>{this.props.year}</i>
      </h3>
    </div>
  );
  }
};

export { Card };
