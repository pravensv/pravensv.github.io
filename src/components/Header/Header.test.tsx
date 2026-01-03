import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
    const mockScrollToSection = vi.fn();
    const mockRefs = {
        homeRef: { current: document.createElement('div') },
        educationRef: { current: document.createElement('div') },
        experienceRef: { current: document.createElement('div') },
        projectsRef: { current: document.createElement('div') },
        skillsRef: { current: document.createElement('div') },
        contactRef: { current: document.createElement('div') },
    };

    it('renders header content', () => {
        render(
            <MemoryRouter>
                <Header scrollToSection={mockScrollToSection} refs={mockRefs} />
            </MemoryRouter>
        );
        expect(screen.getByText(/Praveen/i)).toBeInTheDocument();
    });

    it('navigates to all sections from desktop', () => {
        render(
            <MemoryRouter>
                <Header scrollToSection={mockScrollToSection} refs={mockRefs} />
            </MemoryRouter>
        );

        const links = [
            { text: /Home/i, ref: mockRefs.homeRef },
            { text: /Education/i, ref: mockRefs.educationRef },
            { text: /Experience/i, ref: mockRefs.experienceRef },
            { text: /Projects/i, ref: mockRefs.projectsRef },
            { text: /Skills/i, ref: mockRefs.skillsRef },
            { text: /Contact/i, ref: mockRefs.contactRef },
        ];

        links.forEach(({ text, ref }) => {
            // Get the first occurrence (desktop)
            const link = screen.getAllByText(text)[0];
            fireEvent.click(link);
            expect(mockScrollToSection).toHaveBeenCalledWith(ref);
        });
    });

    it('toggles mobile menu and navigates', () => {
        const { container } = render(
            <MemoryRouter>
                <Header scrollToSection={mockScrollToSection} refs={mockRefs} />
            </MemoryRouter>
        );

        // Find hamburger menu by class since it doesn't have text
        const menuIcon = container.querySelector('div[class*="menuIcon"]');
        expect(menuIcon).toBeInTheDocument();

        if (menuIcon) {
            fireEvent.click(menuIcon);

            const links = [
                { text: /Home/i, ref: mockRefs.homeRef },
                { text: /Education/i, ref: mockRefs.educationRef },
                { text: /Experience/i, ref: mockRefs.experienceRef },
                { text: /Projects/i, ref: mockRefs.projectsRef },
                { text: /Skills/i, ref: mockRefs.skillsRef },
                { text: /Contact/i, ref: mockRefs.contactRef },
            ];

            links.forEach(({ text, ref }) => {
                // Get the second occurrence (mobile)
                const link = screen.getAllByText(text)[1];
                fireEvent.click(link);
                expect(mockScrollToSection).toHaveBeenCalledWith(ref);
            });
        }
    });
});

