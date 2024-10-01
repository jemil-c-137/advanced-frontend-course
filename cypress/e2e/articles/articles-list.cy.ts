describe('User visit articles list page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login('testuser', '123').then((data) => {
            cy.visit('articles');
        });
    });

    it('articles loaded successfully', () => {
        cy.getByTestId('ArticlesList').should('exist');
    });
});
