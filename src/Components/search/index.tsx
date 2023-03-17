import React from 'react';
import './search.scss';

type IProps = {};
type IState = { value: string };

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState((state) => ({
      ...state,
      value: e.target.value,
    }));
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('items');
    if (searchValue) {
      this.setState({
        value: searchValue,
      });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('items', this.state.value);
  }

  render() {
    return (
      <div className='search'>
        <form className='search-form'>
          <input
            className='search-form_input'
            type='text'
            placeholder='Search...'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export { Search };
