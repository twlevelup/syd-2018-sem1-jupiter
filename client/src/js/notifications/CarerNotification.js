const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
const compiledTemplate = require("../../templates/CarerNotification.hbs");

const mockData = require("../../storage/my_data.json");
const audio = require("../../sounds/definite.mp3");

module.exports = class CarerNotification extends BaseNotification {
  template() {
    const context = {
      name: mockData.carers[0].name,
      audio
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    NotificationHub.hide();
    this.navigate('carerinfo');
  }
};