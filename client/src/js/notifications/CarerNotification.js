const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
const compiledTemplate = require("../../templates/CarerNotification.hbs");

const mockData = require("../../storage/my_data.json");

module.exports = class CarerNotification extends BaseNotification {
  template() {
    const context = {
      name: mockData.data[0].name,
    };
    return compiledTemplate(context);
  }
};