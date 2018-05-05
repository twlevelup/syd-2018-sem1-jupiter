const PatientReadyPage = require('../../src/js/pages/patientReadyPage');
describe('Patient Ready Page', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });        

	describe('#topButtonEvent', () => {
	    it('return to home screen', () => {
		    const props = {
			    navigate: () => { },
		    };
		    const page = new PatientReadyPage(props);
		    spyOn(page, 'navigate');
		    
		    page.topButtonEvent();
		    expect(page.navigate).toHaveBeenCalledWith('patienthome');
	    });
    });

});