import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange Tests', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameFielg: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    selectorGeneric: ".oxd-select-text--arrow"
  }

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboadPage()
    
    menuPage.accessMyInfo()


    // cy.get(selectorsList.firstNameField).clear().type('Firstnametest')
    // cy.get(selectorsList.lastNameFielg).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    // cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.selectorGeneric).eq(0).click()
    // cy.get('.oxd-select-dropdown > :nth-child(27)').click()
    // cy.get(selectorsList.selectorGeneric).eq(1).click()
    // cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    // cy.get(selectorsList.submitButton).eq(0).click({force: true})
    // cy.get('body').should('contain', "Successfully Updated")

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})