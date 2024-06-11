import LoginPage from "../page_objects/LoginPage.js"

describe("second spec", () => {
    it("test1", () => {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        var loginPage = new LoginPage()
        console.log("=========================> " + loginPage.getLocator("LP_key1"))
    })
})