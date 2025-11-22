import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
    it('renders footer content', () => {
        render(<Footer />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        // Check if brand is rendered (assuming it comes from JSON)
        // We can check for some known text or just structure if JSON is dynamic
        // For now, just checking if it renders without crashing and contains some elements
    });
});
