import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const primerElement = screen.getByText(/Primer/i);
  expect(primerElement).toBeInTheDocument();
});
