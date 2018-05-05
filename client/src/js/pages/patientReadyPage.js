const BasePage = require('watch-framework').BasePage;
const PatientReadyPageTemplate = require('../../templates/patientReadyPage.hbs')

class PatientReadyPage extends BasePage {

    constructor(props = {}) {
        super(props);
    }

    template() {
        return PatientReadyPageTemplate();
    }
    
    topButtonEvent() {
	    this.navigate('patienthome');
    }
}

module.exports = PatientReadyPage;