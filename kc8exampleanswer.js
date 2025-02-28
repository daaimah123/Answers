// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders header correctly', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello Techtonica!');
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('This is a Gratitud List');
  });

  test('renders form component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter an item')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('adds new item when submitted', async () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Enter an item');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await userEvent.type(input, 'New test item');
    await userEvent.click(submitButton);

    expect(await screen.findByText('New test item')).toBeInTheDocument();
  });

  test('handles empty input submission', async () => {
    render(<App />);
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    // Check if no new items were added
    expect(await screen.queryByText(/New test item/i)).not.toBeInTheDocument();
  });
});

    
// ============
//     OR 
// ============
    
Your task is to write tests for the provided code. You need to create 4 tests:

* Test if the Header component is rendered correctly.
* Test if items in the list (Item component) are rendered correctly.
* Test if the Form component works as expected or is rendered correctly.
* Test any other functionality or edge case you think is necessary. */}

import { describe, expect, test } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import Header from './components/header';
import Item from './components/item';
import Form from './components/form';

test("Hello Techtonica!", () => {

        const { getByText } = render(<Header />);
        expect(getByText("Hello Techtonica!")).toBeDefined();

});

test("renders items correctly", () => {

        const { getByText } = render(<Item item={{ text: 'Book' }} />);//Pass an object with text property
        expect(getByText("Book")).toBeDefined(); // Check if "Book" text is present

});

describe('Form Component', () => {
        test('input value changes as the user types', () => {
                const { getByPlaceholderText } = render(<Form />);
                const inputElement = getByPlaceholderText("Enter an item");

                // Simulate user typing into the input field
                fireEvent.change(inputElement, { target: { value: "Test Input" } });

                // Check if the input value has changed
                expect(inputElement.value).toBe("Test Input");
        });


        test('Form renders correctly', () => {
                const { getByPlaceholderText, getByText } = render(<Form />);

                // Check if the form elements are rendered
                const inputElement = getByPlaceholderText('Enter an item');
                const submitButton = getByText('Submit');

                // Check if the input field and submit button are present
                expect(inputElement).toBeDefined();
                expect(submitButton).toBeDefined();
        });


});
