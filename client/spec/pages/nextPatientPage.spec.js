const NextPatientPage = require('../../src/js/pages/nextPatientPage');

describe('NextPatientPage', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });

    describe('#template', () => {
        const props = {
            localStorage: {
                getItem: () => 'blah',
                setItem: () => {},
            },
        };

        it('should a template', () => {
            const page = new NextPatientPage(props);
            expect(page.template()).toContain("<h1>Next Patient</h1>");
        });

        it('should have a template with specific contacts', () => {
            const page = new NextPatientPage(props);
            expect(page.template()).toContain("<p>Name: blah</p>");
            expect(page.template()).toContain("<p>Address: blah</p>");
            expect(page.template()).toContain("<p>Suburb: blah</p>");
            expect(page.template()).toContain("<p>Time: blah</p>");
        });
    });
    
	describe('#homeIcon', () => {
        const props = {
            localStorage: {
                getItem: () => { },
                setItem: () => { },
            },
        };
        
    	it('should have a home icon', () => {
		const page = new NextPatientPage(props);
		expect(page.template()).toContain('fa-home');
    })
  })
  
  
  describe('#topButtonEvent', () => {
    it('return to home screen', () => {
        const localStorage = {
            getItem: () => 'blah',
            setItem: () => {},
        };
	    const props = {
            navigate: () => { },
            localStorage,
	    };
	    const page = new NextPatientPage(props);
	    spyOn(page, 'navigate');
	    
	    page.topButtonEvent();
	    expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});