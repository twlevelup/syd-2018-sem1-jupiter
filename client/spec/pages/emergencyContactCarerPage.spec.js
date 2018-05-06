const EmergencyContactCarerPage = require('../../src/js/pages/emergencyContactCarerPage');

describe('The Emergency Contact Page - for Carer', () => {

    describe('#template', () => {
        it('should contain "You have notified the emergency contact"', () => {
            const page = new EmergencyContactCarerPage();
            expect(page.template()).toContain('You have notified the emergency contact');
        });
        it('should contain a homepage icon', () => {
            const page = new EmergencyContactCarerPage();
            expect(page.template()).toContain('homeIcon fas fa-home fa-2x');
        });
    });

    describe('#topButtonEvent', () => {
        it('goes back to carer homepage', () => {
            const props = {
                navigate: () => { },
            };
            const page = new EmergencyContactCarerPage(props);
            spyOn(page, 'navigate');

            page.topButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('/');
        });
    });
});