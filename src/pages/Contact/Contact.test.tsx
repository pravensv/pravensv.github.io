import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import emailjs from '@emailjs/browser';
import React from 'react';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
    default: {
        sendForm: vi.fn().mockResolvedValue({ text: 'OK' }),
    },
}));

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
        fireEvent.change(screen.getByPlaceholderText(/Subject/i), { target: { value: 'Test Subject' } });
        fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: 'Test Message' } });

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        await waitFor(() => {
            expect(emailjs.sendForm).toHaveBeenCalled();
            expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
        });
    });

    it('handles submission error', async () => {
        // Mock rejection
        (emailjs.sendForm as any).mockRejectedValue({ text: 'Error' });

        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText(/Your Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Your Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Subject/i), { target: { value: 'Test Subject' } });
        fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: 'Test Message' } });

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
        });
    });

    it('returns early if form ref is null', () => {
        // Mock useRef to return an object where current is always null and ignores writes
        const mockRef = {
            get current() { return null; },
            set current(_v) { /* ignore */ }
        };
        const useRefSpy = vi.spyOn(React, 'useRef').mockReturnValue(mockRef);

        render(<Contact />);

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        expect(emailjs.sendForm).not.toHaveBeenCalled();

        useRefSpy.mockRestore();
    });
});
