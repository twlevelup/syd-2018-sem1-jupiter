const CarerNotification = require("../../src/js/notifications/CarerNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("CarerNotification", () => {
  describe("#template", () => {
    it("should have a template stating carer is 5min away and option for more info", () => {
      const notification = new CarerNotification();
      expect(notification.template()).toContain("is 5 minutes away. Press 'right' button for more info.");
    });
  });
});