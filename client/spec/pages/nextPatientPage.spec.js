const NextPatientPage = require('../../src/js/pages/nextPatientPage');

describe('NextPatientPage', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });

    describe('#template', () => {
        it('should a template', () => {
            const page = new NextPatientPage();
            expect(page.template()).toContain("<h1>Next Patient</h1>");
        });

        it('should have a template with specific contacts', () => {
            const contacts = {name: 'Ray White', address: '105 Parramatta Rd', suburb: 'Haberfield', time:'15:00'}
            const props = { contacts }
            const page = new NextPatientPage(props);
            expect(page.template()).toContain("<p>Name: Ray White</p>");
            expect(page.template()).toContain("<p>Address: 105 Parramatta Rd</p>");
            expect(page.template()).toContain("<p>Suburb: Haberfield</p>");
            expect(page.template()).toContain("<p>Time: 15:00</p>");
        });
    });

});