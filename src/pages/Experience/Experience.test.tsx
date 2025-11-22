import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    },
}));

describe('Experience Page', () => {
    it('renders experience entries', () => {
        render(<Experience />);
        expect(screen.getByText(/Experience/i)).toBeInTheDocument();
        // Check if timeline exists
        // Assuming JSON data is populated
    });
});
