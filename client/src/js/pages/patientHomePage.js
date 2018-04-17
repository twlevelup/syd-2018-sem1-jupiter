const BasePage = require('watch-framework').BasePage;
const patientHomePageTemplate = require('../../templates/patientHomePage.hbs')

class PatientHomePage extends BasePage {
    template() {
        return patientHomePageTemplate();
    }
}

module.exports = PatientHomePage;