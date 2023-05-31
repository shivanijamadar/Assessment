export class PatientData {
    sendGetRequest() {
        cy.request({
            url: '/baseR4/Patient?_pretty=true',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }).then((response) => {
            cy.wrap(response).as('response');
        })
          
    }

    checkResponseIsSortedById(){
        var patientsIds = [];
        cy.get('@response').then((response) => {
            response.body.entry.forEach((value) => {
                patientsIds.push(value.resource.id);
            });
            expect(patientsIds.sort()).to.be.sorted();
        });
    }

    checkAddressInTheResponse() {
        cy.get('@response').then((response) => {
            response.body.entry.forEach((value) => {
                if(value.resource.address != null){
                    var postalCode = parseInt(value.resource.address[0].postalCode);
                    expect(postalCode).to.not.be.null;
                    expect('number').to.equal(typeof(postalCode));
                }
            });
        });
    }

    checkGenderInTheResponse() {
        cy.get('@response').then((response) => {
            response.body.entry.forEach((value) => {
                var gender = value.resource.gender;
                switch(gender) {
                    case 'male':
                        expect(gender).to.equal('male');
                    break;
                    case 'female':
                        expect(gender).to.equal('female');
                    break;
                    case null:
                        expect(gender).to.be.null;
                    break;
                }
            });
        });
    }

}
export const patientData = new PatientData();