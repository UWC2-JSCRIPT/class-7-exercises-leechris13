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
        it('Dealer should stay on normal 17', function() {
            expect(dealerShouldDraw([ten, seven])).toEqual(false)
        })
        it('Dealer should draw on 14', function() {
            expect(dealerShouldDraw([two, four, six, two])).toEqual(true)
        })
        it('Dealer should draw on soft Ace', function() {
            expect(dealerShouldDraw([ace, ace, two])).toEqual(true)
        })
    })
})