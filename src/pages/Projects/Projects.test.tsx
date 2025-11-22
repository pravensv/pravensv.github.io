import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    },
}));

describe('Projects Page', () => {
    it('renders projects list', () => {
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );
        expect(screen.getByText(/Projects/i)).toBeInTheDocument();
        // Check if projects are rendered
    });
});
