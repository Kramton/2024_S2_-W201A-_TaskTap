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
  test('handleEdit sets the correct item in edit mode', () => {
    // Mocking the items and editItem state
    const items = [
      { id: '1', jobType: 'Full Time', startDate: '2023-10-01', description: 'Job 1' },
      { id: '2', jobType: 'Part Time', startDate: '2023-11-01', description: 'Job 2' }
    ];

    // Mocking the state using React's useState to simulate the component's behavior
    jest.spyOn(React, 'useState')
      .mockImplementationOnce(() => [items, jest.fn()])   // First call to useState: items list
      .mockImplementationOnce(() => [null, jest.fn()]);  // Second call to useState: editItem state

    const { getByText } = render(<ItemList />);

    // Simulate clicking the Edit button for the first item
    const editButton = getByText(/Edit/i); // Assuming button has 'Edit' text
    userEvent.click(editButton);

    // Check that the editItem state is set by verifying if the edit form appears with correct values
    expect(screen.getByDisplayValue('Full Time')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2023-10-01')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Job 1')).toBeInTheDocument();
  });

  test('render ItemList', () => {
    render(<ItemList />);
    const list = screen.getByText(/Items List/i);
    expect(list).toBeInTheDocument();
  });
});
