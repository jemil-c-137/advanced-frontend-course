export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (id: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${id}`,
    headers: { authorization: 'test' },
    body: {
        id: '4',
        first: 'Test',
        lastname: 'Test',
        age: 26,
        currency: 'euro',
        country: 'ukraine',
        city: 'kanoha',
        username: 'testuser',
        avatar: 'https://static.wikia.nocookie.net/denaruto3/images/9/9f/Smallnaruto.png',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(id: string): Chainable<Response<any>>;
        }
    }
}
