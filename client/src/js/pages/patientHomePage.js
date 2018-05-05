const BasePage = require('watch-framework').BasePage;
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const patientHomePageTemplate = require('../../templates/patientHomePage.hbs')

class PatientHomePage extends BasePage {
    constructor(props) {
        super(props);

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

        };
        return patientHomePageTemplate(context);
    }

    rightButtonEvent() {
        this.navigate('carerinfo');
    }
}

module.exports = PatientHomePage;