const notifications = require('../src/js/notifications');
const CarerNotification = require('../src/js/notifications/CarerNotification');

describe('notifications', () => {
  it('all notifications should exist', () => {
    expect(notifications).toHaveLength(3);
  });
});

describe('Carer ETA notifications', () => {
  it('should have a type property with value carerETA', () => {
    expect(notifications[2].type).toBe("carerETA");
  });
  it('should have a label with Carer ETA', () => {
    expect(notifications[2].label).toBe("Carer ETA");
  });
  it('should have a placeholder value with generic 5 min away message', () => {
    expect(notifications[2].defaultValue).toBe("Your carer is 5 minutes away. Press 'right' button for more info.");
  });
  it('should have a CarerNotification view', () => {
    expect(notifications[2].view).toBe(CarerNotification);
  });
});