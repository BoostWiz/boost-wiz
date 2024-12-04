import { render, screen } from '@/tests/test-utils';
import Home from '../page';

test('renders Home Page UI', async () => {
  render(<Home />);

  expect(screen.getByText(/BoostWiz/i)).toBeInTheDocument();
});
