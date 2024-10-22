import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemList from '../Components/ItemList';

// Mock Firebase dependencies
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  initializeFirestore: jest.fn(),
}));

jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(),
}));

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  onValue: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
}));


describe('ItemList component', () => {

  const mockItems = [
    { id: '1', name: 'Order 1', description: 'Description 1' },
    { id: '2', name: 'Order 2', description: 'Description 2' },
  ];

  test('should display a list of orders', () => {
    render(<ItemList />);

    // Check if the orders are displayed
    expect(screen.getByText('Order 1')).toBeInTheDocument();
    expect(screen.getByText('Order 2')).toBeInTheDocument();
  });

  test('should not display any orders if none are present', () => {
    // Simulating no items in the database
    jest.mocked(onValue).mockImplementationOnce((ref, callback) => {
      callback({ val: () => null });
    });

    render(<ItemList />);

    // Check if a message or empty state is displayed when there are no orders
    expect(screen.queryByText('Order 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Order 2')).not.toBeInTheDocument();
  });

  test('render ItemList', () => {
    render(<ItemList />);
    const list = screen.getByText(/Items List/i);
    expect(list).toBeInTheDocument();
  });

});

// to test for specific component do: npm test -- src/__tests__/ItemList.test.jsx