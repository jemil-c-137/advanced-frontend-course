import { EditableProfileCard } from '../../src/features/EditableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender';

describe('EditableProfileCard.cy.ts', () => {
    it('render component', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: {
                            id: '4',
                        },
                    },
                },
            }}>
                <EditableProfileCard id="4" />
            </TestProvider>,
        );
    });
});
