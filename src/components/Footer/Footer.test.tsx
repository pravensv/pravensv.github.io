import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
    it('renders footer content', () => {
        render(<Footer />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();

        // Check for Brand
        expect(screen.getByRole('heading', { name: /Praveen Voruganti/i })).toBeInTheDocument();

        // Check for View Counter
        expect(screen.getByText(/Total Portfolio Views/i)).toBeInTheDocument();

        // Check for Social Links (images)
        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThan(0);
    });
});
