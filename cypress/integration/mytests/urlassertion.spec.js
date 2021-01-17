describe('launch my app', ()=> {

    it('app testing', ()=>{

        cy.visit('https://www.spicejet.com')
        cy.contains('Covid-19 Information')
        cy.contains('Covid-19 Information').click()
        cy.url().should('include', '/covid19.aspx') //This is an assertation
    })

})
