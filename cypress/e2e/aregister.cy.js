describe('register back market', () => {
    beforeEach(() => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        //aller sur la page d'inscription de back market
        cy.get('section div div div button._3jgXaWY4').click();
        //accepter les cookies
    })

    it('link for the page CGV', () => {
        cy.get("section div form p span a").should("have.attr", "href").and("contain", "/fr-fr/legal/terms-of-use/");
        cy.get("section div form p span a").eq(0).click();
        //verifier que le lien pour les CGV n'est pas un lien mort
    })

    it('link for the page CGU', () => {
        cy.get("section div form p span a").eq(1).should("have.attr", "href").and("contain", "fr-fr/legal/terms-of-sale");
        cy.get("section div form p span a").eq(1).click();
    })

    it('link for the page politique de confidentialité', () => {
        cy.get("section div form p span a").eq(2).should("have.attr", "href").and("contain", "legal/data-protection");
        cy.get("section div form p span a").eq(2).click();
    })

    it('authentification', () => {

        cy.get('#firstName').type('Pierre')
        //inscrire mon prenom
        cy.get('#lastName').type('Bonnier')
        //inscrire mon nom
        cy.get('#signup-email').type('pl_bonnier@yahoo.fr')
        //inscrire mon email
        cy.get('#signup-password').type('Testeur*2024')
        //inscrire mon mot de passe
        cy.get('._2OVE0h6V').click()
        //accepter les publicités
        cy.get('form ._1ayVgG8s').eq(1).click()
        //cliquer sur le bouton pour s'inscrire    
    })
})