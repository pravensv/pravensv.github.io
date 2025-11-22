import { render, screen, fireEvent } from '@testing-library/react';
import Skills from './Skills';
import { describe, it, expect } from 'vitest';

describe('Skills Page', () => {
    it('renders skills and filters', () => {
        render(<Skills />);
        expect(screen.getByText(/Skills/i)).toBeInTheDocument();
        expect(screen.getAllByText(/All/i)[0]).toBeInTheDocument();
    });

    it('filters skills by category', () => {
        render(<Skills />);

        // Click Frontend filter
        const frontendBtn = screen.getByText('Frontend');
        fireEvent.click(frontendBtn);

        // Check if a frontend skill is visible (e.g., React JS)
        expect(screen.getByText('React JS')).toBeInTheDocument();

        // Check if a backend skill is NOT visible (e.g., Java)
        // Note: queryByText returns null if not found
        expect(screen.queryByText('Java')).not.toBeInTheDocument();

        // Click All filter
        const allButtons = screen.getAllByText(/All/i);
        fireEvent.click(allButtons[0]);

        // Check if both are visible now
        expect(screen.getByText('React JS')).toBeInTheDocument();
        expect(screen.getByText('Java')).toBeInTheDocument();
    });
});
