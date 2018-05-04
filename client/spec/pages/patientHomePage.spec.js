const PatientHomePage = require('../../src/js/pages/patientHomePage');

describe('Patient Home Page', () => {

    describe('#template', () => {
        it('should contain the correct text', () => {
            const page = new PatientHomePage();
            expect(page.template()).toContain('fa-user-md');
        });
    });

    describe('#leftButtonEvent', () => {
        it('goes to emergency contact page', () => {
            const props = {
                navigate: () => { },
            };
            const page = new PatientHomePage(props);
            spyOn(page, 'navigate');

            page.leftButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('emergencycontact');
        });
    });

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
})