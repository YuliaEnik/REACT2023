import './home.scss';
import React from 'react';
import { Search } from '../../Components/search';

class Home extends React.Component {
  render() {
    return(
    <div className='cards-page'>
    <Search></Search>
    </div>
    )
  };
};

export { Home };