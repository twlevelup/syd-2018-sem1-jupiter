const BasePage = require('watch-framework').BasePage;
const EmergencyContactPageTemplate = require('../../templates/emergencyContactPage.hbs')

class EmergencyContactPage extends BasePage {

    constructor(props = {}) {
        super(props);
        this.message = 'You have notified the emergency contact.'
    }

    template() {
        const context = {
            message: this.message,
        };
        return EmergencyContactPageTemplate(context);
    }

    topButtonEvent() {
        this.navigate('patienthome');
    }
}

module.exports = EmergencyContactPage;