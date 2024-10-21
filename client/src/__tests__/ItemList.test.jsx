import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemList from '../Components/ItemList';

describe('ItemList Component', () => {
  test('renders without crashing', () => {
    render(<ItemList />);
    // Adjust this based on your actual component content
    expect(screen.getByText('Item List')).toBeInTheDocument();
  });
});
