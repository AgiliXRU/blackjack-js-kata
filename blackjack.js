class Deck {
    constructor() {
        this.cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }
}

class Player {

    joinGame(game) {
        this.game = game;
    }

    bet(amount) {
        if (amount < 5)
            return "минимальная ставка 5"

        this.game.takeBet(this, amount)
    }
}

class Dealer {

    constructor() {
        this.deck = new Deck();
    }

    shuffleDeck() {
        this.deck.shuffle()
    }

    dealCards() {
        let first = this.deck.cards.pop()
        let second = this.deck.cards.pop();
        // console.log(`Cards: ${first} ${second}`)
        return [first, second]
    }
}

class Blackjack {
    constructor() {
        this.dealer = new Dealer()
        this.dealer.shuffleDeck()
    }

    bets = []

    takeBet(player, amount) {
        this.bets.push({player: amount})
    }
}

module.exports = { Player, Blackjack }