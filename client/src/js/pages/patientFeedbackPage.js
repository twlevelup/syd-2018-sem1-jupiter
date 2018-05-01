const BasePage = require('watch-framework').BasePage;
const PatientFeedbackPageTemplate = require('../../templates/patientFeedbackPage.hbs')

class PatientFeedbackPage extends BasePage {

    constructor(props = {}) {
        super(props);
        // this.contact = { name: 'John', service: 'Cleaning up, feeding', time: '15:00' }
        this.feedback = 'how are you feeling today?'
    }

    template() {
        const context = {
            message: this.feedback,
        };
        return PatientFeedbackPageTemplate(context);
    }

    topButtonEvent() {
        this.navigate('something_here');
    }
}

module.exports = PatientFeedbackPage;