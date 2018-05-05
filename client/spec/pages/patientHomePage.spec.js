
const PatientHomePage = require('../../src/js/pages/patientHomePage');

describe('Patient Home Page', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="button-left" />';
    });

    describe('#template', () => {
        it('should contain the correct text', () => {
            const page = new PatientHomePage();
            expect(page.template()).toContain('fa-user-md');
        });
    });

    describe('#emergencyIcon', () => {
        it('should have emergency icon', () => {
            const page = new PatientHomePage();
            expect(page.template()).toContain('fa-ambulance');
        })
    })

    describe('#rightButtonEvent', () => {
        it('goes to carer info page', () => {
            const props = {
                navigate: () => { },
            };
            const page = new PatientHomePage(props);
            spyOn(page, 'navigate');

            page.rightButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('carerinfo');
        });
    });

    describe('long press event', () => {
        it('should get the left button', () => {
            const page = new PatientHomePage();

            expect(page.leftButton).toEqual(document.body.firstChild);
        });
        it('should have a hold time of 1000ms', () => {
            const page = new PatientHomePage();

            expect(page.holdTime).toEqual(1500);
        });
        it('should have a an initial leftButtonDown value of 0', () => {
            const page = new PatientHomePage();

            expect(page.leftButtonDown).toEqual(0);
        });
    });

})
