const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/nextPatientPage.hbs');

const mockData = require('../../storage/my_data.json');

class NextPatientPage extends BasePage {

    constructor(props = {}) {
        super(props);
        this.contact = mockData.patients[0];
    }

    template() {
        const context = {
            contact: this.contact,
        };
        return compiledTemplate(context);
    }

}

module.exports = NextPatientPage;