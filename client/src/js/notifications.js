const CarerNotification = require('./notifications/CarerNotification');

const notifications = [
  {
    type: "carerETA",
    label: "Carer ETA",
    defaultValue: "Your carer is 20 minutes away. Press right button for more info.",
    view: CarerNotification,
  },
];

module.exports = notifications;