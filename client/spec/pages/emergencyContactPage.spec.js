const EmergencyContactPage = require('../../src/js/pages/emergencyContactPage');

describe('The Emergency Contact Page', () => {

    describe('#template', () => {
        it('should contain "You have notified the emergency contact"', () => {
            const page = new EmergencyContactPage();
            expect(page.template()).toContain('You have notified the emergency contact');
        });
        it('should contain a homepage icon', () => {
            const page = new EmergencyContactPage();
            expect(page.template()).toContain('homeIcon fas fa-home fa-2x');
        });
    });

    describe('#topButtonEvent', () => {
        it('goes back to homepage', () => {
            const props = {
                navigate: () => { },
            };
            const page = new EmergencyContactPage(props);
            spyOn(page, 'navigate');

            page.topButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('patienthome');
        });
    });
});