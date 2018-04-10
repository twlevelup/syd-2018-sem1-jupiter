const notifications = require('../src/js/notifications');

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
  it('should have a default message', () => {
    expect(notifications[2].defaultValue).toBe("Your carer is 5 minutes away.");
  });
});


