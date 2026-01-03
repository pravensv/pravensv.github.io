import { render, waitFor } from '@testing-library/react';
import SEO from './SEO';
import { describe, it, expect } from 'vitest';
import React from 'react';

// React Helmet modifies the document head.
// We can test side effects on document.title and meta tags.

describe('SEO Component', () => {
    it('updates document title and meta tags', async () => {
        render(
            <SEO
                title="Test Page"
                description="Test Description"
                keywords="test, keywords"
                image="test.jpg"
                url="https://example.com/test"
            />
        );

        await waitFor(() => {
            expect(document.title).toBe('Test Page | Praveen Voruganti');

            const metaDescription = document.querySelector('meta[name="description"]');
            expect(metaDescription).toHaveAttribute('content', 'Test Description');

            const metaKeywords = document.querySelector('meta[name="keywords"]');
            expect(metaKeywords).toHaveAttribute('content', 'test, keywords');

            const ogImage = document.querySelector('meta[property="og:image"]');
            expect(ogImage).toHaveAttribute('content', 'test.jpg');

            const ogUrl = document.querySelector('meta[property="og:url"]');
            expect(ogUrl).toHaveAttribute('content', 'https://example.com/test');
        });
    });

    it('uses default values when props are missing', async () => {
        render(<SEO title="" />); // Empty title to test fallback or specific logic if any

        await waitFor(() => {
            // Check default title logic
            // In component: title ? `${title} | ...` : siteTitle
            expect(document.title).toBe('Praveen Voruganti | Java Full Stack Developer');

            const metaDescription = document.querySelector('meta[name="description"]');
            expect(metaDescription).toHaveAttribute('content', expect.stringContaining('Portfolio of Praveen Voruganti'));
        });
    });
});
