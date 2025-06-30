class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameFielg: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            selectorGeneric: ".oxd-select-text--arrow"
                    }
        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameFielg).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherIdTest, driversLicenseNum, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherIdTest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNum)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatusDetails() {
        cy.get(this.selectorsList().selectorGeneric).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()
        cy.get(this.selectorsList().selectorGeneric).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', "Successfully Updated")
    }
}

export default MyInfoPage