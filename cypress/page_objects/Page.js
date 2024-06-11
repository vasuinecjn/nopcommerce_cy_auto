class Page {

    static pageLocators = new Map();

    locators;

    constructor() {
        if(!Page.pageLocators.has(this.constructor.name)) {
            Page.pageLocators.set(this.constructor.name, require("../pageLocators/"+ this.constructor.name+".json"));
            this.locators = Page.pageLocators.get(this.constructor.name);
        }
    }

    getLocator(key) {
        console.log(Page.pageLocators.get(this.constructor.name))
        console.log(this.locators)
        console.log(typeof this.locators)
        return this.locators[key]
    }
}

export default Page

