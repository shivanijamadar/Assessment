describe('Common Utility to read the data from the JSON File and validate results', () => {
    it('Validate the team has max 4 foreign players', () => {
        cy.fixture('rcb').then((results)  => {
            var players = [];
            for(var i=0;i<results.player.length;i++){
                if(results.player[i].country != 'India'){
                    players.push(results.player[i].country)
                }
            }
            expect(players.length).to.equal(4);
        });
    })

    it('Validate that there is at least one all-rounder in the team', () => {
        cy.fixture('rcb').then((results)  => {
            var players = [];
            for(var i=0;i<results.player.length;i++){
                if(results.player[i].role == 'AllRounder'){
                    players.push(results.player[i].name)
                }
            }
            expect(players.length).to.be.gte(1);
        });
    })

    it('Validate that there is at least one wicket keeper', () => {
        cy.fixture('rcb').then((results)  => {
            var players = [];
            for(var i=0;i<results.player.length;i++){
                if(results.player[i].role == 'Wicketkeeper'){
                    players.push(results.player[i].name)
                }
            }
            expect(players.length).to.be.gte(1);
        });
    })

    it('Validate Playing No: 11 and Substitute: 4 ', () => {
        cy.fixture('rcb').then((results)  => {
            var playingPlayers = [], substitutes = [];
            for(var i=0;i<results.player.length;i++){
                if(results.player[i].playing == 'Sub'){
                    substitutes.push(results.player[i].name)
                }
            }
            expect(substitutes.length).to.equal(4);

            for(var i=0;i<results.player.length;i++){
                if(results.player[i].playing == 'XI'){
                    playingPlayers.push(results.player[i].name)
                }
            }
            expect(playingPlayers.length).to.equal(11);
        });
    })

    it.skip('Validate Playing No: 11 and Substitute: 4 ', () => {
        cy.request('http://hapi.fhir.org/baseR4/Patient?_pretty=true');
    })
    })