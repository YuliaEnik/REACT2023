import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Card } from './Components/card';
import { MemoryRouter } from 'react-router-dom';

test ("renders learn react link", () => {
  const { getByText } = render ( <App />);
  const linkElement = getByText (/learn react/i);
  expect(linkElement).toBeInTheDocument();
}) 


describe('App', () => {
  it('renders App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card author={''} name={''} year={''} imageNum={0} />);
    expect(screen.getByTestId('card')).toBeInTheDocument()
  });
});
