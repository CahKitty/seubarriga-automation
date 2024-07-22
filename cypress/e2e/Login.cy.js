describe('Login', () => {
  beforeEach('', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
  })

  it('sucesso ao logar na plataforma', () => {
    cy.get('#email').type('CARLA.ANNUNCIATO@GMAIL.COM')
    cy.get('#senha').type('discovoador123')
    cy.get('.btn').click()
    cy.contains('Bem vindo, Carla Regina!').should('be.visible')
  })

  it('erro ao logar na plataforma', () => {
    cy.get('#email').type('CARLA.ANNUNCIATO@GMAIL.COM')
    cy.get('#senha').type('outrogato345')
    cy.get('.btn').click()
    cy.contains('Problemas com o login do usuário').should('be.visible')
  })
})