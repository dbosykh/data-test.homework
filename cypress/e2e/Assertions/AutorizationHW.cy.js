it.skip('Registration', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top').click()
    cy.get('[title="Continue"]').click()
    cy.get('#AccountFrm_firstname').type('Daria')
    cy.get('#AccountFrm_lastname').type('Bosykh')
    cy.get('#AccountFrm_email').type('email@example.com')
    cy.get('#AccountFrm_address_1').type('address1')
    cy.get('#AccountFrm_city').type('city')
    cy.get('#AccountFrm_zone_id').select('Aberdeen')
    cy.get('#AccountFrm_postcode').type('12345')
    cy.get('#AccountFrm_loginname').type('DariaLogin')
    cy.get('#AccountFrm_password').type('password')
    cy.get('#AccountFrm_confirm').type('password')
    cy.get('#AccountFrm_newsletter0').click()
    cy.get('#AccountFrm_agree').click()
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click()
    
})

it('Authorization', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top').click()
    cy.get('#loginFrm_loginname').type('DariaLogin')
    cy.get('#loginFrm_password').type('password')
    cy.get('[title="Login"]').click()

})