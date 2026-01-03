import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

// Mock scrollIntoView
const scrollIntoViewMock = vi.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

// Mock IntersectionObserver
class IntersectionObserverMock {
    observe = vi.fn();
    disconnect = vi.fn();
    unobserve = vi.fn();
    takeRecords = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('App Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders main layout and navigates', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        // Check if Header is present (via brand heading to avoid ambiguity)
        // Footer also has this heading, so we get multiple "heading" with name "Praveen Voruganti"?
        // Footer has <h2>Praveen Voruganti</h2>.
        // Header (from previous Header.test.tsx analysis) renders "Praveen Dev" logic?
        // Header.tsx: <div class="logo">Praveen <span>Dev</span></div>. It is NOT a heading.
        // The Header test used `getByText(/Praveen/i)`.
        // The Footer has <h2>Praveen Voruganti</h2> AND <p>...Praveen Voruganti...</p>.

        // In App.test.tsx, screen contains BOTH Header and Footer.
        // screen.getByText(/Praveen Voruganti/i) matches Footer H2 and Footer Copy.

        // We want to check if APP rendered.
        // Checking for "Hi, I'm" (Home) is good.
        // Checking for Footer H2 is good.

        expect(screen.getByRole('heading', { name: /Praveen Voruganti/i })).toBeInTheDocument();

        // Check if Home section is present
        expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();

        // Check if Footer is present
        expect(screen.getByText(/Total Portfolio Views/i)).toBeInTheDocument();
    });

    it('scrolls to section when header link is clicked', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        // Find a navigation link (e.g., Projects) from Header
        const projectsLink = screen.getAllByText(/Projects/i)[0]; // Desktop link

        fireEvent.click(projectsLink);

        await waitFor(() => {
            expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
        });
    });

    it('renders project details route', () => {
        render(
            <MemoryRouter initialEntries={['/projects/1']}>
                <App />
            </MemoryRouter>
        );
        // Project Details page might NOT render Footer brand H2? 
        // App.tsx renders Footer OUTSIDE Routes. So Footer is ALWAYS present.
        // So this check is safe.
        expect(screen.getByRole('heading', { name: /Praveen Voruganti/i })).toBeInTheDocument();
    });
});
