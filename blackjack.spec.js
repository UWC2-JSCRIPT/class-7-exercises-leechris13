describe('Blackjack', ()=> {
    const ace = {val: 11, displayVal: 'Ace', suit: 'hearts'}
    const two = {val: 2, displayVal: '2', suit: 'hearts'}
    const four = {val: 4, displayVal: '4', suit: 'hearts'}
    const six = {val: 6, displayVal: '6', suit: 'hearts'}
    const seven = {val: 7, displayVal: '7', suit: 'hearts'}
    const nine = {val: 9, displayVal: '9', suit: 'hearts'}
    const ten = {val: 10,  displayVal: '10', suit: 'hearts'}

    describe('dealerShouldDraw function', ()=>{
        it('Dealer should stay on 19', function() {
            expect(dealerShouldDraw([ten, nine])).toEqual(false)
        })
        it('Dealer should draw on soft 17', function() {
            expect(dealerShouldDraw([ace, six])).toEqual(true)
        })
        it('Dealer should stay on normal 18 w/ Ace', function() {
            expect(dealerShouldDraw([ten, seven, ace])).toEqual(false)
        })
        it('Dealer should draw on 14', function() {
            expect(dealerShouldDraw([two, four, six, two])).toEqual(true)
        })
    })

    describe('calPoints function', function() {
        it('No aces should calc correctly', function() {
            const expected = {
                total: 19,
                isSoft: false
            }
            expect(calcPoints([ten, nine])).toEqual(expected)
        })

        it('Soft ace should calc correctly', function() {
            const expected = {
                total: 17,
                isSoft: true
            }
            expect(calcPoints([ace, six])).toEqual(expected)
        })
        it('Not soft ace should calc correctly', function() {
            const expected = {
                total: 22,
                isSoft: false
            }
            expect(calcPoints([ten, two, ace, nine])).toEqual(expected)
        })

        it('Multiple aces / soft should calc correctly', function() {
            const expected = {
                total: 20,
                isSoft: true
            }
            expect(calcPoints([ace, two, ace, six])).toEqual(expected)
        })
    })
    //3121
})