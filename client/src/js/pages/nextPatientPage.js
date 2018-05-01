const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/nextPatientPage.hbs');

const mockData = require('../../storage/my_data.json');

class NextPatientPage extends BasePage {

    constructor(props = {}, contact = null) {
        super(props);
        const rand = Math.floor(Math.random() * mockData.patients.length);
        contact ? this.contact = contact : this.contact = mockData.patients[rand];
    }

    template() {
        const context = {
            contact: this.contact,
        };
        return compiledTemplate(context);
    }

}

module.exports = NextPatientPage;