const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/nextPatientPage.hbs');


class NextPatientPage extends BasePage {

    constructor(props) {
        super(props);
        this.patientData = {
            name: this.localStorage.getItem('patientName'),
            address: this.localStorage.getItem('patientAddress'),
            suburb: this.localStorage.getItem('patientSuburb'),
            time: this.localStorage.getItem('patientTime'),
        };
        this.contact = this.patientData;
        this.localStorage.getItem('patientNew') === "true" ? this.new = true : this.new = false;
    }

    template() {
        const context = {
            contact: this.contact,
            new: this.new,
        };
        return compiledTemplate(context);
    }
    
    topButtonEvent() {
        this.localStorage.setItem('patientNew', false);
        this.navigate('/');
    }

}

module.exports = NextPatientPage;