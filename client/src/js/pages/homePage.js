require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const logo = require('../../images/logo.png')
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");
const mockData = require('../../storage/my_data.json');

class HomePage extends BasePage {
  constructor(props) {
    super(props);

    const initialized = this.localStorage.getItem('initialized');
    if (!initialized) {
      this.localStorage.setItem('patientName', mockData.patients[0].name);
      this.localStorage.setItem('patientAddress', mockData.patients[0].address);
      this.localStorage.setItem('patientSuburb', mockData.patients[0].suburb);
      this.localStorage.setItem('patientTime', mockData.patients[0].time);
      this.localStorage.setItem('patientNew', mockData.patients[0].new);
      this.localStorage.setItem('initialized', true);
    }

    this.leftButton = document.getElementById("button-left");
    this.holdTime = 1000;
    this.leftButtonDown = 0;

    this.leftButton.addEventListener("mousedown", (e) => {
      this.leftButtonDown = e.timeStamp;
    });
    this.leftButton.addEventListener("mouseup", (e) => {
      if (e.timeStamp - this.leftButtonDown > this.holdTime) {
        this.navigate('emergencycontact');
      }
    });
  }


  template() {
    const context = {
      date: date,
      time: time,
      logo: logo,
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    this.navigate('nextpatient');
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;

// now I need to connect notification page on homepage to carerHomepage or patient homepage????
// CSS: add shakey shakey notification
