const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/nextPatientPage.hbs');


class NextPatientPage extends BasePage {

    constructor(props = {}) {
        super(props);
        this.contacts = props.contacts || [
            { name: 'Ray', address: '105 Parramatta Rd', suburb: 'Haberfield' },
            { name: 'Sinan', address: '31, Stoney Creek Road', suburb: 'Beverly Hills' },
            { name: 'Jafari', address: '45, Tara Street', suburb: 'Sylvania' },
        ];
    }

    template() {
        const context = {
            contacts: this.contacts,
        };
        return compiledTemplate(context);
    }

}

module.exports = NextPatientPage;