import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche la page marbrerie', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
