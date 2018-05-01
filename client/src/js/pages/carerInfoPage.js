const BasePage = require('watch-framework').BasePage;
const CarerInfoPageTemplate = require('../../templates/carerInfoPage.hbs')

class CarerInfoPage extends BasePage {

    constructor(props = {}) {
        super(props);
		this.question = 'Are you ready for this appointment?';
        this.contact = { name: 'John', service: 'Cleaning up, feeding', time: '15:00' };
    }

    template() {
        const context = {
            contact: this.contact,
            question: this.question,
        };
        return CarerInfoPageTemplate(context);
    }
}

module.exports = CarerInfoPage;