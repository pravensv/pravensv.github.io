import { render, screen } from '@testing-library/react';
import SectionWrapper from './SectionWrapper';
import { describe, it, expect } from 'vitest';

describe('SectionWrapper Component', () => {
    it('renders children correctly', () => {
        render(
            <SectionWrapper>
                <div data-testid="child">Child Content</div>
            </SectionWrapper>
        );
        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Child Content')).toBeInTheDocument();
    });
});
