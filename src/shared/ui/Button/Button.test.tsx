import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('button', () => {
    test('should render button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should render button with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
