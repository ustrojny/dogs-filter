/*import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('dogs header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/psy/i);
  expect(headerElement).toBeInTheDocument();
});

test('placeholder for search', () => {
  const { getByPlaceholderText } = render(<App />);
  const placeholderElement = getByPlaceholderText(/wyszukaj/i);
  expect(placeholderElement).toBeInTheDocument();
});

*/

///
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import DogsList from './DogsList';

it('renders without crashing', () => {
    shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes DogsList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<DogsList />)).toEqual(true)
});

it('shows placeholder for search', () =>{
  const app = shallow(<App />);
  expect(app.containsMatchingElement(/wyszukaj/i)).toEqual(true)
});

it('shows message when there are no dogs', () => {
  const dogsList = shallow(<DogsList dogs={[]} />);
  expect(dogsList.text()).toContain('Brak wyników!')
});

it('does not show message when there are dogs', () => {
  const dogsList = shallow(<DogsList dogs={['Husky']} />);
  expect(dogsList.text()).not.toContain('Brak wyników!')
});

it('shows a list of dogs', () => {
  const dogs = ['Husky', 'Elkhund szary'];
  const dogsList = shallow(<DogsList dogs={dogs} />);
  expect(dogsList.find('li').length).toEqual(dogs.length);
});

describe('list of dogs', () => {
  const dogs = ['Husky', 'Elkhund szary'];
  const dogsList = shallow(<DogsList dogs={dogs} />);

  dogs.forEach(dog => {
    it(`includes name ${dog} on the list`, () => {
      expect(dogsList.containsMatchingElement(<li>{dog}</li>)).toEqual(true)
    });
  });
});

