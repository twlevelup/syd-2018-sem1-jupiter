const BasePage = require('watch-framework').BasePage;
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const patientHomePageTemplate = require('../../templates/patientHomePage.hbs')

class PatientHomePage extends BasePage {
    template() {
        const context = {
            date: date,
            time: time,

        };
        return patientHomePageTemplate(context);
    }

    leftButtonEvent() {
        this.navigate('emergencycontact');
    }

    rightButtonEvent() {
        this.navigate('carerinfo');
    }
}

module.exports = PatientHomePage;