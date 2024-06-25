describe('register back market fail', () => {
    beforeEach(() => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        //aller sur la page d'inscription de back market
        cy.get('section div div div button._3jgXaWY4').click();
        //accepter les cookies
    })

    it('register fail', () => {
        cy.get('#firstName').type('Pierre')
        //inscrire mon prenom
        cy.get('#lastName').type('Bonnier')
        //inscrire mon nom
        cy.get('#signup-email').type('pl_bonnier@yahoo.fr')
        //inscrire mon email
        cy.get('#signup-password').type('Te2024')
        //inscrire mon mot de passe
        cy.get('._2OVE0h6V').click()
        //accepter les publicités
        cy.get('form ._1ayVgG8s').eq(1).click()
        //cliquer sur le bouton pour s'inscrire    
        cy.get('form div div p').should('contain', "Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais.").and('have.css', 'color', 'rgb(169, 15, 20)')
    })
})