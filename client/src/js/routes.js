const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const DemoPage = require('./pages/demoPage');
const NextPatientPage = require('./pages/nextPatientPage');
const PatientHomePage = require('./pages/patientHomePage');
const CarerInfoPage = require('./pages/carerInfoPage');
const EmergencyContactPage = require('./pages/emergencyContactPage');
const PatientReadyPage = require('./pages/patientReadyPage');
const PatientFeedbackPage = require('./pages/patientFeedbackPage');
const PatientFeedbackConfirmationPage = require('./pages/patientFeedbackConfirmationPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'demo': DemoPage,
  'nextpatient': NextPatientPage,
  'patienthome': PatientHomePage,
  'carerinfo': CarerInfoPage,
  'emergencycontact': EmergencyContactPage,
  'patientreadypage': PatientReadyPage,
  'patientfeedback': PatientFeedbackPage,
  'patientfeedbackconfirmation': PatientFeedbackConfirmationPage
};
