const BasePage = require('watch-framework').BasePage;
const CarerInfoPageTemplate = require('../../templates/carerInfoPage.hbs')

class CarerInfoPage extends BasePage {

    constructor(props = {}) {
        super(props);
		this.question = 'Are you ready?';
        this.contact = { name: 'John', service: 'Cleaning, Cooking', time: '15:00' };
    }

    template() {
        const context = {
            contact: this.contact,
            question: this.question,
        };
        return CarerInfoPageTemplate(context);
    }
    
    topButtonEvent() {
	    this.navigate('patienthome');
    }

	leftButtonEvent() {
	    this.navigate('patientreadypage');
    }
    
    rightButtonEvent() {
	    this.navigate('patientreadypage');
    }
}

module.exports = CarerInfoPage;