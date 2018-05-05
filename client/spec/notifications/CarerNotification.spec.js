const CarerNotification = require("../../src/js/notifications/CarerNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("CarerNotification", () => {
  describe("#template", () => {
    it("should have a template stating carer is 20min away", () => {
      const notification = new CarerNotification();
      expect(notification.template()).toContain("20 minutes");
    });
    it("should have an audio notification", () => {
      const notification = new CarerNotification();
      expect(notification.template()).toContain("audio autoplay");
      expect(notification.template()).toContain("/public/sounds/definite.mp3");
    });
  });

  describe("#rightButtonEvent", () => {
    it("should navigate to carerinfo", () => {
      const props = {
        navigate: jest.fn(),
      };
      const notification = new CarerNotification(props);
      notification.rightButtonEvent();
      expect(props.navigate).toHaveBeenCalledWith('carerinfo');
    });
    it("should hide notification after navigation", () => {
      const props = {
        navigate: jest.fn(),
      };
      const notification = new CarerNotification(props);
      notification.rightButtonEvent();
      expect(hideSpy).toHaveBeenCalled();
    });
  });
});