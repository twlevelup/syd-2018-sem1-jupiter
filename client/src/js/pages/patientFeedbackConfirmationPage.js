const BasePage = require('watch-framework').BasePage;
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const patientFeedbackConfirmationPageTemplate = require('../../templates/patientFeedbackConfirmationPage.hbs')

class PatientFeedbackConfirmationPage extends BasePage {
    constructor(props) {
        super(props);
    }

template() {
        const context = {
            date: date,
            time: time,

        };
        return patientFeedbackConfirmationPageTemplate(context);
    }


topButtonEvent() {
        this.navigate('patienthome');
    }
    
}

module.exports = PatientFeedbackConfirmationPage;