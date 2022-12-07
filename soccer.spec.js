describe('Test for the soccer game', ()=> {

    describe('Test the getTotalPoints Method', ()=> {

        it('Should return correct point total', () => {

            const points = getTotalPoints('wwdl')
            expect(points).toBe(7)
            // expect(getTotalPoints('dddl')).toBe(3)
        })
    })
    describe('Test the orderteams function', ()=> {    
        it('Should return the correct teams, with Points', ()=> {
            const team1 = {
                name: "Sounders",
                results: "wwwwwldl",
            }
            const team2 = {
                name: "Man U",
                results: "wwwwwww",
            }

            const expectedString = 'Sounders: 16'
            'Man U: 21'

            const result = orderTeams(team1, team2)

            expect(result).toContain('Man U')
        })
    })
})