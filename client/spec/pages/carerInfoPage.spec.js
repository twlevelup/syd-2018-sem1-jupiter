const CarerInfoPage = require('../../src/js/pages/carerInfoPage');
describe('Carer Page', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });

    describe('#template', () => {
        it('should contain the name of the carer', () => {
            const page = new CarerInfoPage();
            expect(page.template()).toContain('Name');
        });
        it('should contain the service of the carer', () => {
            const page = new CarerInfoPage();
            expect(page.template()).toContain('Service');
        });
        it('should contain the service of the carer', () => {
            const page = new CarerInfoPage();
            expect(page.template()).toContain('Time of appointment');
        });
    });
})