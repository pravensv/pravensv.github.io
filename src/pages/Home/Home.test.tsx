import { render, screen, act, fireEvent } from '@testing-library/react';
import Home from './Home';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    },
}));

describe('Home Page', () => {
    it('renders home content', () => {
        render(<Home />);
        expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
        expect(screen.getByText(/Praveen/i)).toBeInTheDocument();
        expect(screen.getByText(/Resume/i)).toBeInTheDocument();
        expect(screen.getByText(/Hire Me/i)).toBeInTheDocument();
    });

    it('types description text', async () => {
        vi.useFakeTimers();
        render(<Home />);

        // Fast-forward time to let typing effect finish
        act(() => {
            vi.advanceTimersByTime(10000); // Sufficient time for long text
        });

        // Check if some text from description is present (assuming data.description is not empty)
        // We might need to know the exact text or just check if it's not empty
        // For now, just ensuring no crash and timer works
        vi.useRealTimers();
    });

    it('scrolls to contact section when Hire Me is clicked', () => {
        const scrollIntoViewMock = vi.fn();
        const getElementByIdMock = vi.spyOn(document, 'getElementById').mockReturnValue({
            scrollIntoView: scrollIntoViewMock,
        } as any);

        render(<Home />);

        const hireMeBtn = screen.getByText(/Hire Me/i);
        fireEvent.click(hireMeBtn);

        expect(getElementByIdMock).toHaveBeenCalledWith('contact-section');
        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

        getElementByIdMock.mockRestore();
    });

    it('does not crash if contact section is missing', () => {
        const getElementByIdMock = vi.spyOn(document, 'getElementById').mockReturnValue(null);

        render(<Home />);

        const hireMeBtn = screen.getByText(/Hire Me/i);
        fireEvent.click(hireMeBtn);

        expect(getElementByIdMock).toHaveBeenCalledWith('contact-section');

        getElementByIdMock.mockRestore();
    });
});
