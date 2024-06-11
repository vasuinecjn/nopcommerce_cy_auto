import DashboardPage from "./DashboardPage.js";
import Page from "./Page.js";

class LoginPage extends Page {

    constructor() {
        super();
    }

    login(login) {
        cy.get(this.getLocator("username")).type(login.username);
        cy.get(this.getLocator("password")).type(login.password);
        cy.get(this.getLocator("login")).click();
        return new DashboardPage();
    }


}

// module.exports = LoginPage
export default LoginPage;