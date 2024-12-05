// ItemList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList', () => {
  it('renders a list of items', () => {
    const items = ['Apple', 'Banana', 'Cherry'];
    render(<ItemList items={items} />);

    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('does not display duplicate items', () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Apple'];
    render(<ItemList items={items} />);

    const uniqueItems = ['Apple', 'Banana', 'Cherry'];
    uniqueItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
