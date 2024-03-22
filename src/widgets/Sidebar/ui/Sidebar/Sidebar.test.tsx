import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('should render sidebar', () => {
        componentRender(<Sidebar />, { route: '/' });
        expect(screen.getByTestId('sidebar'));
    });

    test('should render sidebar toggle', () => {
        componentRender(<Sidebar />, { route: '/' });
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar'));
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
