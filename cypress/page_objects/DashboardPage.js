import AdminUserManagementPage from "./AdminUserManagementPage.js";
import Page from "./Page.js";

class DashboardPage extends Page {

    constructor() {
        super();
    }

    navigateToAdminPage() {
        cy.get(this.getLocator("admin")).click();
        return new AdminUserManagementPage();
    }


}

// module.exports = LoginPage
export default DashboardPage;