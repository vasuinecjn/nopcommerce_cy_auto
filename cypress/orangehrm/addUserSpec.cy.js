import LoginPage from "../page_objects/LoginPage.js";

describe("Add user Tests", () => {

    const testCases = require("../testCaseFiles/addUserTestCases.json");
    var loginPage;

    beforeEach("before each test", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        loginPage = new LoginPage()
    })

    testCases.forEach((testCase) => {
        if (testCase.skip) return;
        it(testCase.testName, () => {
            loginPage
            .login(testCase.login)
            .navigateToAdminPage()
            .addNewuser(testCase.newUserDetails)
        })
    })
})