import Link from './index';
import {render,screen} from '@testing-library/react'
it('changes the class when hovered', () => {
  render(<Link>123</Link>)
  const linkElement = screen.getByText(/123/i);
  expect(linkElement).toMatchSnapshot()
  expect(linkElement).toBeInTheDocument();
});