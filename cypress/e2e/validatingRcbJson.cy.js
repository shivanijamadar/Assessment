describe('Common Utility to read the data from the JSON File and validate results', () => {
    it('Validate the team has max 4 foreign players', () => {
        cy.fixture('rcb').then((results)  => {
            var foreignPlayers = [];
            results.player.forEach((players) => {
                if(players.country != 'India'){
                    foreignPlayers.push(players.country)
                }
            });
            expect(foreignPlayers.length).to.equal(4);
        });
    })

    it('Validate that there is at least one all-rounder in the team', () => {
        cy.fixture('rcb').then((results)  => {
            var allRounders = [];
            results.player.forEach((players) => {
                if(players.role == 'AllRounder'){
                    allRounders.push(players.name)
                }
            });
            expect(allRounders.length).to.be.gte(1);
        });
    })

    it('Validate that there is at least one wicket keeper', () => {
        cy.fixture('rcb').then((results)  => {
            var wicketKeeper = [];
            results.player.forEach((players) => {
                if(players.role == 'Wicketkeeper'){
                    wicketKeeper.push(players.name)
                }
            });
            expect(wicketKeeper.length).to.be.gte(1);
        });
    })

    it('Validate Playing No: 11 and Substitute: 4 ', () => {
        cy.fixture('rcb').then((results)  => {
            var playingPlayers = [], substitutes = [];
            results.player.forEach((players) => {
                if(players.playing == 'Sub'){
                    substitutes.push(players.name)
                }
            });
            expect(substitutes.length).to.equal(4);

            results.player.forEach((players) => {
                if(players.playing == 'XI'){
                    playingPlayers.push(players.name)
                }
            });
            expect(playingPlayers.length).to.equal(11);
        });
    })
    })