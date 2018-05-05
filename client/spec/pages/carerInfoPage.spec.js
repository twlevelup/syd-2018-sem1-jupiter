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
            expect(page.template()).toContain('Time');
        });
        
        it('should contain readiness query', () => {
	        const page = new CarerInfoPage();
	        expect(page.template()).toContain('Are you ready?');
        });
        
    });
    
    describe('#topButtonEvent', () => {
	    it('return to home screen', () => {
		    const props = {
			    navigate: () => { },
		    };
		    const page = new CarerInfoPage(props);
		    spyOn(page, 'navigate');
		    
		    page.topButtonEvent();
		    expect(page.navigate).toHaveBeenCalledWith('/');
	    });
    });
    
    describe('#leftButtonEvent', () => {
	    it('render Patient Ready page', () => {
		    const props = {
			    navigate: () => { },
		    };
		    const page = new CarerInfoPage(props);
		    spyOn(page, 'navigate');
		    
		    page.leftButtonEvent();
		    expect(page.navigate).toHaveBeenCalledWith('patientreadypage');
	    });
    });
	describe('#rightButtonEvent', () => {
	    it('render Patient Ready page', () => {
		    const props = {
			    navigate: () => { },
		    };
		    const page = new CarerInfoPage(props);
		    spyOn(page, 'navigate');
		    
		    page.rightButtonEvent();
		    expect(page.navigate).toHaveBeenCalledWith('patientreadypage');
	    });
    });
});



	
