const AlertNotification = require('./notifications/AlertNotification');
const CarerNotification = require('./notifications/CarerNotification');

const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "push",
    label: "Push",
    defaultValue: "This is a test push notification",
  },
  {
    type: "carerETA",
    label: "Carer ETA",
    defaultValue: "Your carer is 5 minutes away. Press 'right' button for more info.",
    view: CarerNotification,
  },
];

module.exports = notifications;