describe('profile editing', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login('testuser', '123').then((data) => {
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile('4');
    });

    it('profile is loaded', () => {
        cy.getByTestId('ProfileCard.firstName').should('have.value', 'Test');
    });
    it('edits profile', () => {
        cy.updateProfile('new', 'lastName');
        cy.getByTestId('ProfileCard.firstName').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastName').should('have.value', 'lastName');
    });
});
