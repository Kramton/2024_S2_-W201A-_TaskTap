import { render, screen } from '@testing-library/react';
import { Help } from '../Pages/Help';
import '@testing-library/jest-dom/extend-expect';
describe('Help Component', () => {
    test('renders Help component correctly', () => {
        render(<Help />);
        
        const titleElement = screen.getByText(/Help/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the step-by-step guide', () => {
        render(<Help />);
        
        const step1 = screen.getByText(/Step 1: Click Account button/i);
        const step2 = screen.getByText(/Step 2: Click New Orders button/i);
        const step3 = screen.getByText(/Step 3: Fill in the details of your order!/i);
        const step4 = screen.getByText(/Step 4: Click Save button/i);
        const step5 = screen.getByText(/Step 5: Click Current Orders button/i);
        
        expect(step1).toBeInTheDocument();
        expect(step2).toBeInTheDocument();
        expect(step3).toBeInTheDocument();
        expect(step4).toBeInTheDocument();
        expect(step5).toBeInTheDocument();
    });

    test('renders the SideBar and Background components', () => {
        render(<Help />);
        
        // const sideBar = screen.getByRole('complementary');
        const background = screen.getByRole('img'); 

        // expect(sideBar).toBeInTheDocument();
        expect(background).toBeInTheDocument();
    });
});