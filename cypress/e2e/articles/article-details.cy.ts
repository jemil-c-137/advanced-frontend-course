describe('User visits articles details page', () => {
    beforeEach(() => {
        cy.login('testuser', '123');
    });

    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});
