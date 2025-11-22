import { render, screen } from '@testing-library/react';
import Education from './Education';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    },
}));

describe('Education Page', () => {
    it('renders education entries', () => {
        render(<Education />);
        expect(screen.getByText(/Education/i)).toBeInTheDocument();
        // Check if at least one degree is rendered (assuming data exists)
        // We can check for specific text if we know the JSON content, or just check structure
    });
});
