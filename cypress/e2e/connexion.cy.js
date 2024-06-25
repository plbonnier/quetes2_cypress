describe("register back market fail", () => {
    beforeEach(() => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        //aller sur la page d'inscription de back market
        cy.get('section div div div button._3jgXaWY4').click();
        //accepter les cookies
    });

    it('texte h2 et lien ok', () => {
        cy.get('section h2').eq(0).should('contain', "J'ai déjà un compte.");
        cy.get('form div a').should("have.attr", "href").and("contain", "fr-fr/password-reset");
        cy.get("form div a").click();
        cy.url("https://preprod.backmarket.fr/fr-fr/password-reset");
        cy.get('header div div div button div span').should('contain', 'P');
    });

    it('connnexion ok', () => {
        cy.get('#signin-email').type('pl_bonnier@yahoo.fr');
        cy.get('#signin-password').type('Testeur*2024');
        cy.get('form ._1ayVgG8s').eq(0).click();
        cy.url('https://preprod.backmarket.fr/fr-fr/dashboard/orders');
    })
})