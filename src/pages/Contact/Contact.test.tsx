import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Contact component currently mocks submission without emailjs
// so we test the simulated behavior

describe('Contact Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders contact form', () => {
        render(<Contact />);
        expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });

    it('submits form successfully', async () => {
        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText(/Your Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Your Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Your Message/i), { target: { value: 'Test Message' } });

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
        });
    });
});
