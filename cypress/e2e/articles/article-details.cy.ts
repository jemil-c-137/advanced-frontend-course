describe('User visits articles details page', () => {
    let currentArticleId = '';

    beforeEach(() => {
        cy.login('testuser', '123');
        cy.createArticle().then((data) => {
            currentArticleId = data.body.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('article content is shown', () => {
        cy.getByTestId('Text.Header').should('exist');
    });

    it('article recommendations list is shown', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('leaves a comment', () => {
        cy.getByTestId('Text.Header').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test');
        cy.getByTestId('CommentCard.Content').should('exist');
    });

    it('gives rate', () => {
        cy.getByTestId('Text.Header').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(5, 'feedback');
        cy.get('[data-selected="true"]').should('have.length', 5);
    });
});
