
describe('form Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Check Name', function () {
        cy.get('input[name="name"]').type('Andrew')
        cy.get('input[name="name"]').should('have.value', 'Andrew')

    })
    it('check Special instructions', function () {
        cy.get('input[name="special"]').type('knock twice')
        cy.get('input[name="special"]').should('have.value', 'knock twice')
    })

    it('Check Toppoings', function () {
        cy.get('input[name="pep"]').check()
        cy.get('input[name="sausage"]').check()
        cy.get('input[name="bacon"]').check()
        cy.get('input[name="mushroom"]').check()
        cy.get('input[name="pep"]').should('have.checked', true)
        cy.get('input[name="sausage"]').should('have.checked', true)
        cy.get('input[name="bacon"]').should('have.checked', true)
        cy.get('input[name="mushroom"]').should('have.checked', true)

    })
    describe('Submit Check', function () {
        it('Submit is live', function () {
            cy.get('input[name="name"]').type('Andrew')
            cy.get('input[name="pep"]').check()
            cy.get('input[name="sausage"]').check()
            cy.get('input[name="bacon"]').check()
            cy.get('input[name="mushroom"]').check()
            cy.get('button[name="submit"]').should('not.be.disabled')
        })
        it('Submit is not live', function () {
            cy.get('input[name="name"]').type('A')
            cy.get('input[name="pep"]').check()
            cy.get('input[name="sausage"]').check()
            cy.get('input[name="bacon"]').check()
            cy.get('input[name="mushroom"]').check()
            cy.get('button[name="submit"]').should('be.disabled')
        })


    })
})