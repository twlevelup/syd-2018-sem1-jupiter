const BasePage = require('watch-framework').BasePage;
const CarerInfoPageTemplate = require('../../templates/carerInfoPage.hbs')

class CarerInfoPage extends BasePage {
    template() {
        return CarerInfoPageTemplate();
    }
}

module.exports = CarerInfoPage;