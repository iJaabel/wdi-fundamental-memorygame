var start = document.getElementById('start');
	start.addEventListener('click', matchGame());

function matchGame() {

	console.log('Game is setting...');

		//loads cards values

		var cards = [
		{
		rank: "queen",
		suit: 'hearts',
		cardImage: "assets/images/queen-of-hearts.png"
		},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage: "assets/images/queen-of-diamonds.png"
		},
		{
		rank: "king",
		suit: "hearts",
		cardImage: "assets/images/king-of-hearts.png"
		},
		{
		rank: "king",
		suit: "diamonds",
		cardImage: "assets/images/king-of-diamonds.png"
		},

		];

		var cardsInPlay = [];
	
		//game logic checks for card match

		function checkForMatch() 
		{
			if (cardsInPlay.length === 2) 
			{

				if (cardsInPlay[0] === cardsInPlay[1]) 

				{alert('You found a match!');}

				else {alert('Try again.');};

			};
		}
			

		function flipCard () 
		{
			var cardID = this.getAttribute('data-id');
			this.setAttribute('src', cards[cardID].cardImage);
			cardsInPlay.push(cards[cardID].rank);
			setTimeout(100000);
			checkForMatch();
		};


		//manifest board functionality

		function createBoard () 
		{
			for (var i = 0; i < cards.length; i++) 
			{
			var cardElement = document.createElement('img');
			var reset = document.getElementById('reset');
				reset.addEventListener('click', resetBoard);
				cardElement.setAttribute('src', 'assets/images/back.png');
				cardElement.setAttribute('data-id', i);
				cardElement.addEventListener('click', flipCard);
				document.getElementById("game-board").appendChild(cardElement);
			}
		};

		//resets game with button

		function resetBoard () 
		{
			cardsInPlay.pop();
			cardsInPlay.pop();
			var x = document.getElementById('game-board');
			x.innerHTML = " ";
			createBoard();
			console.log('Game reset');
		}

		createBoard();

		console.log('Game is running!');
};

//matchGame();