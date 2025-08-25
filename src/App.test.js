import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application title', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /bolus connect/i });
  expect(heading).toBeInTheDocument();
});
