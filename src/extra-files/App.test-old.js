// import { render, screen } from '@testing-library/react';
import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Anonymus function

test('renders without error', () => {});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders without error', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//   throw new Error('Fail this test!');
// });
