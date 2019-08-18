const matchGame = function() {

	console.log('Game started...');

		const cards = [
		{rank: "queen"
		suit: "hearts",
		cardImage: "assets/images/queen-of-hearts.png",},

		{rank: "queen",
		suit: "diamonds",
		cardImage: "assets/images/queen-of-diamonds.png",},

		{rank: "king",
		suit: "hearts",
		cardImage: "assets/images/king-of-hearts.png",},

		{rank: "king",
		suit: "diamonds",
		cardImage: "assets/images/king-of-diamonds.png",},
		];

		let cardsInPlay = [];

		let checkForMatch = function() {
			cardsInPlay.push(cards[cardID].rank);
			if (cardsInPlay[0] === cardsInPlay[1]) {
				console.log('You found a match!');
			} else {
				console.log('Try again.');
			}
		};

		let flipCard = function(cardID) {
			if (cardsInPlay.length === 2) {
				checkForMatch();
			};
		
			console.log('Player flipped ' + cards[cardID].rank);
			console.log(cards[cardID].cardImage);
			console.log(cards[cardID].suit);

		};

		let createBoard = function () {
			for (var i = 0; i < cards.length; i++) {
			let cardElement = document.createElement('img');
				cardElement.setAttribute('src', 'assets/images/back.png');
				cardElement.setAttribute('data-id', i);
				document.getElementById('game-board').appendChild(cardElement);
			};
		};

		
}

matchGame();