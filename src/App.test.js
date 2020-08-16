import React from 'react';
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

