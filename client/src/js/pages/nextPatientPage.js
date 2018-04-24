const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/nextPatientPage.hbs');

class NextPatientPage extends BasePage {

    constructor(props = {}) {
        super(props);
        this.contact = { name: 'Ray White', address: '105 Parramatta Rd', suburb: 'Haberfield', time: '15:00' }
    }

    template() {
        const context = {
            contact: this.contact,
        };
        return compiledTemplate(context);
    }

}

module.exports = NextPatientPage;