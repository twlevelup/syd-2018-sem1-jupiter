const BasePage = require('watch-framework').BasePage;
const CarerInfoPageTemplate = require('../../templates/carerInfoPage.hbs')

class CarerInfoPage extends BasePage {

    constructor(props = {}) {
        super(props);
        this.contact = { name: 'John', service: 'Cleaning up, Feeding, Body check', time: '15:00' }
    }

    template() {
        return CarerInfoPageTemplate();
    }
}

module.exports = CarerInfoPage;