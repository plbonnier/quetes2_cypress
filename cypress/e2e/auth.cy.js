describe('register back market', () => {
    context('register', () => {
        beforeEach(() => {
            //aller sur la page d'inscription de back market
            cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        })

        it('write our firstname', () => {
            cy.get('#firstName').type('Pierre{enter}')
        })

        it('write our lastname', () => {
            cy.get('#lastName').type('Bonnier{enter}')
        })

        it('write our email', () => {
            cy.get('#signup-email').type('pl_bonnier@yahoo.fr{enter}')
        })

        it('write our password', () => {
            cy.get('#signup-password').type('Testeur*2024{enter}')
        })

        it('click on the case to accept the advertising', () => {
            cy.get('._2OVE0h6V').click()
        })

        it('click on the button to register', () => {
            cy.get('.MkLAMntR').click()
        })

    })
})