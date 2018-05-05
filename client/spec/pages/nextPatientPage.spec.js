const NextPatientPage = require('../../src/js/pages/nextPatientPage');

describe('NextPatientPage', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });

    describe('#template', () => {
        const contact = { name: 'Ray White', address: '105 Parramatta Rd', suburb: 'Haberfield', time: '15:00', new: true };

        it('should a template', () => {
            const page = new NextPatientPage();
            expect(page.template()).toContain("<h1>Next Patient</h1>");
        });

        it('should have a template with specific contacts', () => {
            const page = new NextPatientPage({}, contact);
            expect(page.template()).toContain("<p>Name: Ray White</p>");
            expect(page.template()).toContain("<p>Address: 105 Parramatta Rd</p>");
            expect(page.template()).toContain("<p>Suburb: Haberfield</p>");
            expect(page.template()).toContain("<p>Time: 15:00</p>");
        });

        it('should indicate new patient', () => {
            const page = new NextPatientPage({}, contact);
            expect(page.template()).toContain("new");
        });
    });
    
	describe('#homeIcon', () => {
    	it('should have a home icon', () => {
		const page = new NextPatientPage();
		expect(page.template()).toContain('fa-home');
    })
  })
  
  
  describe('#topButtonEvent', () => {
    it('return to home screen', () => {
	    const props = {
		    navigate: () => { },
	    };
	    const page = new NextPatientPage(props);
	    spyOn(page, 'navigate');
	    
	    page.topButtonEvent();
	    expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});