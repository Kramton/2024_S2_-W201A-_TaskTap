import { render, screen } from '@testing-library/react';
import { AboutUs } from '../Pages/AboutUs';

describe('AboutUs Component', () => {
  test('render About Us heading', () => {
    render(<AboutUs />);
    const heading = screen.getByText(/About Us/i);
    expect(heading).toBeInTheDocument();
  });

  test('render Our Mission heading', () => {
    render(<AboutUs />);
    const missionHeading = screen.getByText(/Our Mission/i);
    expect(missionHeading).toBeInTheDocument();
  });

  test('render Our Values heading', () => {
    render(<AboutUs />);
    const valuesHeading = screen.getByText(/Our Values/i);
    expect(valuesHeading).toBeInTheDocument();
  });

  test('render Meet the Team heading', () => {
    render(<AboutUs />);
    const teamHeading = screen.getByText(/Meet the Team/i);
    expect(teamHeading).toBeInTheDocument();
  });

  test('render Contact Us heading', () => {
    render(<AboutUs />);
    const contactHeading = screen.getByText(/Contact Us/i);
    expect(contactHeading).toBeInTheDocument();
  });

  test('render contact email link', () => {
    render(<AboutUs />);
    const emailLink = screen.getByRole('link', { name: /support@tasktap.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:support@tasktap.com');
  });

  test('render images', () => {
    render(<AboutUs />);
    const image = screen.getByAltText(/The Team/i);
    expect(image).toBeInTheDocument();
  });
});
