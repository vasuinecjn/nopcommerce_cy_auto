describe("first spec", () => {

    const testData = require("../fixtures/login.json")

    beforeEach("before each test", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    testData.forEach((data) => {
        console.log("printing type of cy --> " + typeof cy)
        if (data.skip) return
        it(data.testName, () => {
            cy.get("input[name='username']").clear().type(data.userName)
            cy.get("input[name='password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-topbar-header-breadcrumb > h6")
            .should("be.visible")
            .should("contain.text", data.validate_message)
            cy.get("span.oxd-userdropdown-tab").click()
            cy.get("a[href*='logout']").click()
        })
    })
})