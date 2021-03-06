const {Blackjack, Player} = require("../../blackjack");
const {Given, When, Then} = require("cucumber");
const {expect} = require("chai");

let player
const game = new Blackjack()
let error

Given(/^Игорь хочет испытать удачу в blackjack$/, function () {
    player = new Player()
    player.joinGame(game)
});

When(/^он делает ставку (\d+) фишек$/, function (chips) {
    error = player.bet(chips)
});
Then(/^дилер сдаёт ему (\d+) карты$/, function (cardsCount) {
    const cards = game.dealer.dealCards()
    expect(cards.length).to.equal(cardsCount)
});
Then(/^дилер сообщает ему:$/, function (table) {
    // console.log(table.rows())
    expect(error).to.equal(table.rows()[0][0])
});