import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect, vi } from 'vitest';

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
        render(<Header scrollToSection={mockScrollToSection} refs={mockRefs} />);
        expect(screen.getByText(/Praveen/i)).toBeInTheDocument();
    });

    it('navigates to all sections from desktop', () => {
        render(<Header scrollToSection={mockScrollToSection} refs={mockRefs} />);

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
        const { container } = render(<Header scrollToSection={mockScrollToSection} refs={mockRefs} />);

        // Find hamburger menu by class since it doesn't have text
        // We can use a selector or add a test-id. Since we can't edit code easily just for test-id without user request,
        // let's try to find it by structure or class if possible, or just click the div that has the onClick
        // The hamburger is likely the div with class containing 'menuIcon'
        // But testing-library recommends roles. The div has no role.
        // Let's try to find it by class name using querySelector (not ideal but works) or adding a role in the component if we were allowed.
        // Actually, we can use container.querySelector
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
                // Note: The menu might close after click, so we might need to reopen it or just click it if it's still in DOM (it is, just hidden)
                // The click handler is on the span, so it should work even if hidden, but let's see.
                // Actually, closeMenu sets menuOpen to false.
                // If we want to click all, we might need to reopen or just click them.
                // Since they are in the DOM, we can click them.
                const link = screen.getAllByText(text)[1];
                fireEvent.click(link);
                expect(mockScrollToSection).toHaveBeenCalledWith(ref);
            });
        }
    });
});
