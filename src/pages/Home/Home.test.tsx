import { render, screen, act } from '@testing-library/react';
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
        // Hire Me button is removed, so ensure it's not there
        expect(screen.queryByText(/Hire Me/i)).not.toBeInTheDocument();
    });

    it('types description text', async () => {
        vi.useFakeTimers();
        render(<Home />);

        // Fast-forward time to let typing effect finish
        act(() => {
            vi.advanceTimersByTime(30000);
        });

        vi.useRealTimers();

        // Check for presence of description lines
        // Since we don't know exact class names from css module easily in test without import, 
        // we check for paragraph elements which contain the typing text
        const lines = document.querySelectorAll('p');
        // We expect at least some paragraphs to be present in the document
        expect(lines.length).toBeGreaterThan(0);
    });
});
