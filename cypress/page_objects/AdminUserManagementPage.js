import Page from "./Page.js";
import { faker } from '@faker-js/faker';

class AdminUserManagementPage extends Page {

    constructor() {
        super();
    }

    addNewuser(newUserDetails) {
        cy.get(this.getLocator("addUserButton")).click()
        cy.wait(2000)
        cy.get(this.getLocator("userRoleDropDown")).click()
        cy.wait(2000)
        cy.get(this.getLocator("userRoleDropDownSelectAdmin")).click()
        cy.wait(2000)
        cy.get(this.getLocator("employeeNameTextBox")).type(newUserDetails.employeeName)
        cy.wait(2000)
        cy.get(this.getLocator("employeeSearchResultElement")).click()
        cy.wait(2000)
        cy.get(this.getLocator("statusDropDown")).click();
        cy.wait(2000)
        cy.contains(newUserDetails.status).click();
        cy.wait(2000)
        cy.get(this.getLocator("userNameTextBox")).type(faker.internet.userName());
        cy.wait(2000)
        cy.get(this.getLocator("password")).type(newUserDetails.password);
        cy.wait(2000)
        cy.get(this.getLocator("confirmPassword")).type(newUserDetails.confirmPassword);
        cy.wait(2000)
        cy.get(this.getLocator("addUserSave")).click();
        cy.wait(2000)
        cy.url().should("contain", "viewSystemUsers");
        return this;
    }

}

// module.exports = AdminUserManagementPage
export default AdminUserManagementPage;