import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('Unauthorized user navigation', () => {
        it('visit main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('visit profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('visit non-existing page', () => {
            cy.visit('/nosuchpage');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('uthorized user navigation', () => {
        it('visit profile page', () => {
            cy.login('admin', '123');
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('visit articles page', () => {
            cy.login('admin', '123');
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
