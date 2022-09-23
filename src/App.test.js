import { render, screen } from '@testing-library/react';
import "../src/components/style.css";
import Register from './components/Register.jsx';
test('renders learn react link', () => {
  render(<Register />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
