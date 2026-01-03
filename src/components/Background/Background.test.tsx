import { render } from '@testing-library/react';
import Background from './Background';
import { describe, it, expect } from 'vitest';

describe('Background Component', () => {
    it('renders canvas element', () => {
        const { container } = render(<Background />);
        const canvas = container.querySelector('canvas');
        expect(canvas).toBeInTheDocument();
    });
});
