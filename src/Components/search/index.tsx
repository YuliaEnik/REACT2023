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

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
     this.setState({ value: event.currentTarget.value });
  }

  componentDidMount(): void {
    const searchValue: string | null = localStorage.getItem('items');
    if (searchValue) {
      this.setState({
        value: searchValue,
      }) 
    } 
  }

  componentWillUnmount(): void {
    if (this.state.value) {
      localStorage.setItem('items', this.state.value)
    } this.setState ({
        value: '',
      })
  }

  render() {
    return (
      <div className='search'>
        <form className='search-form'>
          <input
            className='search-form_input'
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
