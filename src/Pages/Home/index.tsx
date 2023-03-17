import './home.scss';
import React from 'react';
import { Search } from '../../Components/search';

type IProps = {};
type IState = { value: string };

class Home extends React.Component<IProps, IState> {
  render() {
    return(
    <div className='cards-page'>
    <Search></Search>
    </div>
    )
  };
};

export { Home };