// ItemList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList', () => {
  it('renders a list of items', () => {
    // sample data for testing
    const items = ['Apple', 'Banana', 'Cherry'];
    //render test items in component
    render(<ItemList items={items} />);
    // check that items render
    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('does not display duplicate items', () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Apple'];
    render(<ItemList items={items} />);
    // check that unique items are in the test data
    const uniqueItems = ['Apple', 'Banana', 'Cherry'];
    uniqueItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('removes duplicate items', () => {
    const itemsWithDuplicates = ['Item 1', 'Item 2', 'Item 1'];
    setup({ items: itemsWithDuplicates });
    
    // Get unique items count
    const uniqueItems = [...new Set(itemsWithDuplicates)];
    
    // Check that only unique items are rendered
    expect(screen.getAllByRole('listitem')).toHaveLength(uniqueItems.length);
  });

    test('renders empty state when no items provided', () => {
    setup({ items: [] });
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });

  
});
