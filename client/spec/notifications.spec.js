const notifications = require('../src/js/notifications');
const CarerNotification = require('../src/js/notifications/CarerNotification');

describe('notifications', () => {
  it('all notifications should exist', () => {
    expect(notifications).toHaveLength(1);
  });
});

describe('Carer ETA notifications', () => {
  it('should have a type property with value carerETA', () => {
    expect(notifications[0].type).toBe("carerETA");
  });
  it('should have a label with Carer ETA', () => {
    expect(notifications[0].label).toBe("Carer ETA");
  });
  it('should have a placeholder value with generic 20 min away message', () => {
    expect(notifications[0].defaultValue).toBe("Your carer is 20 minutes away. Press right button for more info.");
  });
  it('should have a CarerNotification view', () => {
    expect(notifications[0].view).toBe(CarerNotification);
  });
});