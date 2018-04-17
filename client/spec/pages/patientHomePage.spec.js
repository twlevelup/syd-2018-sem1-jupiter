const PatientHomePage = require('../../src/js/pages/patientHomePage');

describe('Patient Home Page', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });

    describe('#template', () => {
        it('should contain the correct text', () => {
            const page = new PatientHomePage();
            expect(page.template()).toContain('C');
        });
    });
})